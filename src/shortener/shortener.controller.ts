// shortener.controller.ts
import { Controller, Post, Get, Param, Body, NotFoundException } from '@nestjs/common';
import { ShortenerService } from './shortener.service';

@Controller('shorten')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async shortenUrl(@Body('url') url: string) {
    return await this.shortenerService.createShortUrl(url);
  }

  @Get(':code')
  async redirect(@Param('code') code: string) {
    return await this.shortenerService.getOriginalUrl(code);
  }
}