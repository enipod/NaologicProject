import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Product } from '../product';

@Entity()
export class Order {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    name: 'status',
    type: String,
    nullable: false,
    default: 'FULFILLED',
  })
  status: 'PENDING' | 'FULFILLED';

  @Column({
    name: 'total',
    type: Number,
    nullable: false,
    default: 0,
  })
  total: number;

  @Column({
    name: 'issued_at',
    type: 'date',
    nullable: true,
  })
  issued_at!: Date;

  @Column(() => Product)
  products!: any;
  
  constructor(status: 'PENDING' | 'FULFILLED') {
    this.status = status;
    this.issued_at = new Date(Date.now().toString());
  }
}
