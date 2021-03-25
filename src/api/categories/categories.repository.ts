import { MongoRepository } from '../../util/data/MongoRepository';
import { Category } from './category.model';

export class CategoriesMongoRepository extends MongoRepository<Category> {
  constructor() {
    super('categories');
  }
}
