import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { URL } from './url.entity';
import * as shortid from 'shortid';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel(URL)
    private urlModel: typeof URL,
  ) {}

  async createShortUrl(longUrl: string): Promise<string> {
    const existingUrl = await this.urlModel.findOne({ where: { longUrl } });
    if (existingUrl) {
      return existingUrl.shortUrl;
    }

    const shortUrl = shortid.generate();
    await this.urlModel.create({ longUrl, shortUrl });
    return shortUrl;
  }

  async getLongUrl(shortUrl: string): Promise<string> {
    const url = await this.urlModel.findOne({ where: { shortUrl } });
    if (!url) {
      throw new NotFoundException('Short URL not found.');
    }
    return url.longUrl;
  }
}
