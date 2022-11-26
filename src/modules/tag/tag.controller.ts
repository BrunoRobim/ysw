import { Request, Response } from 'express';
import { TagUseCase } from './tag.useCase';

const tagUseCase = new TagUseCase();
class Tag {
  async get_all_tag(req: Request, res: Response) {
    const useCase = await tagUseCase.find_all_tag();
    return res.status(useCase.code).send(useCase.data);
  }

  async get_tag_by_name(req: Request, res: Response) {
    const { name } = req.params;
    const useCase = await tagUseCase.find_by_name(name);
    return res.status(useCase.code).send(useCase.data);
  }

  async create_tag(req: Request, res: Response) {
    const { name, id_structure } = req.body;
    const useCase = await tagUseCase.create_tag(name, id_structure);
    return res.status(useCase.code).send(useCase.data);
  }

  async delete_tag(req: Request, res: Response) {
    const { name } = req.body;
    const useCase = await tagUseCase.delete_tag(name);
    return res.status(useCase.code).send(useCase.data);
  }
}

export { Tag };
