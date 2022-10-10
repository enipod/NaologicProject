import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Order } from '../entities/order';
import { Product } from '../entities/product/product.schema';
import { default as products } from '../utils/dummy/buld-update-product-sample.json';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //PRODUCTS

  @Get('/product')
  async getProducts() {
    return await this.appService.getProducts();
  }

  @Get('/product/:id')
  async getProduct(@Param('id') id: string) {
    return await this.appService.getProduct(id);
  }

  @Post('/product')
  async createProduct(@Body() body: Product) {
    return await this.appService.addProduct(body);
  }

  @Post('/product/bulk-update')
  async updateProducts() {
    return await this.appService.updateProducts(products);
  }

  @Delete('/product/:id')
  async deleteProduct(@Param('id') id: string) {
    return await this.appService.deleteProduct(id);
  }

  //ORDERS

  @Get('/order')
  async getOrders() {
    return await this.appService.getOrders();
  }

  @Get('/order/:id')
  async getOrder(@Param('id') id: string) {
    return await this.appService.getOrder(id);
  }

  @Post('/order')
  async createOrder(@Body() body: Order) {
    return await this.appService.addOrder(body);
  }

  @Delete('/order/:id')
  async deleteOrder(@Param('id') id: string) {
    return await this.appService.deleteOrder(id);
  }
}
