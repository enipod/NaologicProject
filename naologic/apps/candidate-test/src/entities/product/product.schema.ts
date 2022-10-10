import { ObjectId } from 'bson';
import { Entity, ObjectIdColumn, Column, ObjectID, IsNull } from 'typeorm';
import { ProductVariant } from './product-variant.schema';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: string;

  @Column({
    name: 'name',
    type: String,
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'manufacturer',
    type: String,
    nullable: false,
  })
  manufacturer!: string;

  @Column({
    name: 'quantity',
    type: Number,
    nullable: false,
    default: 0,
  })
  quantity!: number;

  @Column({
    name: 'category',
    type: String,
    nullable: false,
  })
  category!: string;

  @Column({
    name: 'price',
    type: Number,
    nullable: false,
    default: 0,
  })
  price!: number;

  @Column(() => ProductVariant)
  variants?: ProductVariant[];

  constructor(
    name: string,
    manufacturer: string,
    category: string,
    price: number,
  ) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.category = category;
    this.price = price;
  }
}
