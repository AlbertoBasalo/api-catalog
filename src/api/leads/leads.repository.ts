import { MongoRepository } from '../../util/data/MongoRepository';
import { Lead } from './lead';

export class LeadsMongoRepository extends MongoRepository<Lead> {
  constructor() {
    super('leads');
  }
}
