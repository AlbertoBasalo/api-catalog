import { MongoRepository } from '../../util/data/MongoRepository';
import { User } from './user.model';

export class UsersMongoRepository extends MongoRepository<User> {
  constructor() {
    super('users');
  }
}
