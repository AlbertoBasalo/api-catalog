import { MongoRepository } from '../../util/data/MongoRepository';
import { Category } from './category';

export class CategoriesMongoRepository extends MongoRepository<Category> {
  constructor() {
    super('categories');
  }
}
