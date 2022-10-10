import { Entity, Column } from 'typeorm';

@Entity()
export class VariantOptions {
  @Column()
  color: string;

  @Column()
  size?: number;

  @Column()
  gender?: number;

  @Column()
  season?: string;

  @Column('boolean', {default: true})
  isInSale: boolean;
}