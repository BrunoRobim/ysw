import { Request, Response } from 'express';
import { StructureUseCase } from './structure.useCase';

const structureUseCase = new StructureUseCase();
class Structure {
  async get_all_structures(req: Request, res: Response) {
    const useCase = await structureUseCase.find_all_structures();
    return res.status(useCase.code).send(useCase.data);
  }

  async get_structure_by_name(req: Request, res: Response) {
    const { name } = req.params;
    const useCase = await structureUseCase.find_by_name(name);
    return res.status(useCase.code).send(useCase.data);
  }

  async create_structure(req: Request, res: Response) {
    const { name, description } = req.body;
    const useCase = await structureUseCase.create_structure(name, description);
    return res.status(useCase.code).send(useCase.data);
  }

  async delete_structure(req: Request, res: Response) {
    const { name } = req.body;
    const useCase = await structureUseCase.delete_structure(name);
    return res.status(useCase.code).send(useCase.data);
  }
}

export { Structure };
