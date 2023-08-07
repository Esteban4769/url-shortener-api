import { registerAs } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { URL } from '../src/url/url.entity';

export default registerAs(
  'database',
  (): SequelizeModuleOptions => ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test123',
    database: 'postgres',
    models: [URL],
    autoLoadModels: true,
    synchronize: true,
  }),
);
