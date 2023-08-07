// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { URL } from './url/url.entity';
import { UrlController } from './url/url.controller';
import { UrlService } from './url/url.service';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig(),
      }),
    }),
    SequelizeModule.forFeature([URL]),
  ],
  controllers: [UrlController],
  providers: [UrlService],
})
export class AppModule {}
