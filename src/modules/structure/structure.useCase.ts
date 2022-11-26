import { standard_response } from '../../shared/services/standard_response/standard_response.service';
import { StructureQuery } from './structure.query';

const queryC = new StructureQuery();
class StructureUseCase {
  async find_all_structures() {
    const dbResult = await queryC.find_all_structures();
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async find_by_name(name: string) {
    const dbResult = await queryC.find_by_name(name);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async create_structure(name: string, description: string) {
    const dbResult = await queryC.create_structure(name, description);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async delete_structure(id_structure: string) {
    const dbResult = await queryC.delete_structure(id_structure);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }
}

export { StructureUseCase };
