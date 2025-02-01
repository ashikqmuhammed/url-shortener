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
    MongooseModule.forRoot('mongodb+srv://ashikqmuhammed:9656213569@devcluster.k8jp1.mongodb.net/url-shortener-db?retryWrites=true&w=majority&appName=DevCluster'),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
    CacheModule.register(),
  ],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class AppModule {}