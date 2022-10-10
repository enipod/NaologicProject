import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { VariantOptions } from './variant-options.schema';
import {v4 as uuidv4} from "uuid"
@Entity()
export class ProductVariant {
  @Column({
    name: 'variantId',
    type: String,
    nullable: false,
  })
  variantId: string;

  @Column({
    name: 'quantity',
    type: Number,
    nullable: false,
    default: 0,
  })
  quantity: number;

  @Column(() => VariantOptions)
  variantOptions?: VariantOptions;

  constructor(
    quantity: number,
    variantOptions: VariantOptions
  ) {
    this.variantId = uuidv4();
    this.quantity = quantity;
    this.variantOptions = variantOptions;
  }
}
