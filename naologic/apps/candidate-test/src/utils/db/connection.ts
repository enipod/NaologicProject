import { DataSource } from 'typeorm';
import { Product } from '../../entities/product/index';
import { Order } from '../../entities/order/index';

const connectDB = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://admin:admin@cluster0.wyowv5h.mongodb.net/?retryWrites=true&w=majority',
  logging: false,
  database: 'Company',
  entities: [Product, Order],
  migrations: [],
  subscribers: [],
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
