import { Request, Response, Router } from 'express';
import { Tag } from './tag.controller';

const tag_routes = Router();
const tagC = new Tag();

tag_routes.use('/getAll', tagC.get_all_tag);
tag_routes.use('/getByName/:id', tagC.get_tag_by_name);
tag_routes.use('/create', tagC.create_tag);
tag_routes.use('/delete', tagC.delete_tag);

tag_routes.use('*', (req: Request, res: Response) => {
  res.status(403).send({
    message: 'Incorrect tag module route!',
    url: req.baseUrl + req.url,
  });
});

export { tag_routes };
