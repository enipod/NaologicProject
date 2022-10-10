import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../utils/common/apiResponse';
import { Product } from '../entities/product/product.schema';
import { ProductVariant } from '../entities/product/index';
import connectDB from '../utils/db/connection';
import { ObjectID } from 'bson';
import { DataSource, DeleteWriteOpResultObject } from 'typeorm';
import { Order } from '../entities/order';

@Injectable()
export class AppService {
  private connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  // PRODUCT

  async getProducts(): Promise<ApiResponse<Product[]>> {
    const data = await this.connection.getMongoRepository(Product).find();

    return new ApiResponse(true, data);
  }

  async getProduct(id: string | any): Promise<ApiResponse<Product>> {
    const product = await this.connection
      .getMongoRepository(Product)
      .findOne(id);
    console.log(product);
    return new ApiResponse(true, product);
  }

  async addProduct(productDto: Product): Promise<ApiResponse<Product>> {
    const product = new Product(
      productDto.name,
      productDto.manufacturer,
      productDto.category,
      productDto.price
    );
    const variantsArray = [];
    let totalQuantity = 0;

    if (productDto.variants && productDto.variants.length) {
      for (const variant of productDto.variants) {
        totalQuantity = variant.quantity;
        variantsArray.push(
          new ProductVariant(variant.quantity, variant.variantOptions)
        );
      }
    }

    product.quantity = totalQuantity;
    product.variants = variantsArray;

    const createdProduct = await this.connection.manager.save(product);

    return new ApiResponse(true, createdProduct);
  }

  async updateProducts(products) {
    /**
     * TO-DO: Add the logic behind bulk updating products
     */

    return new ApiResponse(true, null);
  }

  async deleteProduct(
    id: string
  ): Promise<ApiResponse<DeleteWriteOpResultObject>> {
    console.log(id);
    const data = await this.connection.getMongoRepository(Product).deleteOne({
      _id: new ObjectID(id),
    });

    return new ApiResponse(true, data);
  }

  // ORDER

  async getOrder(id: string | any): Promise<ApiResponse<Order>> {
    const product = await this.connection.getMongoRepository(Order).findOne(id);

    return new ApiResponse(true, product);
  }

  async getOrders(): Promise<ApiResponse<Order[]>> {
    const data = await this.connection.getMongoRepository(Order).find();

    return new ApiResponse(true, data);
  }

  async addOrder(orderDto: Order): Promise<ApiResponse<Order>> {
    /**
     * TO-DO: Add the logic behind creating an order
     */

    return new ApiResponse(true, null);
  }

  async deleteOrder(
    id: string
  ): Promise<ApiResponse<DeleteWriteOpResultObject>> {
    const data = await this.connection.getMongoRepository(Order).deleteOne({
      _id: new ObjectID(id),
    });

    return new ApiResponse(true, data);
  }
}
