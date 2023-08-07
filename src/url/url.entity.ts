import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'postgres' })
export class URL extends Model {
  @Column
  longUrl: string;

  @Column
  shortUrl: string;
}
