import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { ShortenerController } from './shortener/shortener.controller';
import { ShortenerService } from './shortener/shortener.service';
import { Url, UrlSchema } from './shortener/url.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
    CacheModule.register(),
  ],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class AppModule {}