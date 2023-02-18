import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CatalogoDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.catalogo') dataSource: CatalogoDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
