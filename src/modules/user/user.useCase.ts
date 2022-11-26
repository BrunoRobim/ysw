import { standard_response } from '../../shared/services/standard_response/standard_response.service';
import { UserQuery } from './user.query';

const queryC = new UserQuery();
class UserUseCase {
  async find_all() {
    const dbResult = await queryC.find_all();
    if (!dbResult.length) {
      const standardRes = standard_response(400, {
        msg: 'sem usuários cadastradas',
      });
      return standardRes;
    }

    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async find_by_name(name: string) {
    const dbResult = await queryC.find_by_name(name);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async create(name: string, email: string, pass: string) {
    const dbResult = await queryC.create(name, email, pass);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async delete(id_structure: string) {
    const dbResult = await queryC.delete(id_structure);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }
}

export { UserUseCase };
