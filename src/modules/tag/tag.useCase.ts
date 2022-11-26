import { standard_response } from '../../shared/services/standard_response/standard_response.service';
import { TagQuery } from './tag.query';

const queryC = new TagQuery();
class TagUseCase {
  async find_all_tag() {
    const dbResult = await queryC.find_all_tag();
    if (!dbResult.length) {
      const standardRes = standard_response(400, {
        msg: 'sem tags cadastradas',
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

  async create_tag(name: string, id_structure: string) {
    const dbResult = await queryC.create_tag(name, id_structure);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }

  async delete_tag(id_structure: string) {
    const dbResult = await queryC.delete_tag(id_structure);
    const standardRes = standard_response(200, dbResult);
    return standardRes;
  }
}

export { TagUseCase };
