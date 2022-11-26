import { Request, Response } from 'express';
import { UserUseCase } from './user.useCase';

const userUseCase = new UserUseCase();
class User {
  async get_all_user(req: Request, res: Response) {
    const useCase = await userUseCase.find_all();
    return res.status(useCase.code).send(useCase.data);
  }

  async get_tag_by_user(req: Request, res: Response) {
    const { name } = req.params;
    const useCase = await userUseCase.find_by_name(name);
    return res.status(useCase.code).send(useCase.data);
  }

  async create_user(req: Request, res: Response) {
    const { name, email, pass } = req.body;
    const useCase = await userUseCase.create(name, email, pass);
    return res.status(useCase.code).send(useCase.data);
  }

  async delete_user(req: Request, res: Response) {
    const { name } = req.body;
    const useCase = await userUseCase.delete(name);
    return res.status(useCase.code).send(useCase.data);
  }
}

export { User };
