import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Url } from './url.schema';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectModel(Url.name) private urlModel: Model<Url>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async createShortUrl(originalUrl: string) {
    const shortCode = nanoid(8);
    const newUrl = new this.urlModel({ originalUrl, shortCode });
    await newUrl.save();
    return { shortCode };
  }

  async getOriginalUrl(shortCode: string) {
    let url = await this.cacheManager.get<string>(shortCode);
    if (!url) {
      const foundUrl = await this.urlModel.findOne({ shortCode });
      if (!foundUrl) throw new NotFoundException('URL not found');
      url = foundUrl.originalUrl;
      await this.cacheManager.set(shortCode, url);
    }
    return { url };
  }
}