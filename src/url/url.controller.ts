import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UrlService } from './url.service';

@ApiTags('url')
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async createShortUrl(@Body('longUrl') longUrl: string): Promise<string> {
    return this.urlService.createShortUrl(longUrl);
  }

  @Get(':shortUrl')
  async redirectToLongUrl(
    @Param('shortUrl') shortUrl: string,
    @Res() res,
  ): Promise<void> {
    const longUrl = await this.urlService.getLongUrl(shortUrl);

    if (!longUrl) {
      res.send('No such short link!').status(404);
    }

    res.redirect(longUrl);
  }
}
