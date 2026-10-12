import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return {
      mensaje: 'Producto creado',
      datos: createProductDto,
    };
  }

  findAll() {
    return 'Lista de productos';
  }

  findOne(id: number) {
    return `Producto con ID ${id}`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return {
      mensaje: `Producto ${id} actualizado`,
      datos: updateProductDto,
    };
  }

  remove(id: number) {
    return `Producto ${id} eliminado`;
  }
}
