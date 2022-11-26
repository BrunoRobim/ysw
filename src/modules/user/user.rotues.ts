import { Request, Response, Router } from 'express';
import { User } from './user.controller';

const user_routes = Router();
const userC = new User();

user_routes.use('/getAll', userC.get_all_user);
user_routes.use('/getByName/:id', userC.get_tag_by_user);
user_routes.use('/create', userC.create_user);
user_routes.use('/delete', userC.delete_user);

user_routes.use('*', (req: Request, res: Response) => {
  res.status(403).send({
    message: 'Incorrect user module route!',
    url: req.baseUrl + req.url,
  });
});

export { user_routes };
