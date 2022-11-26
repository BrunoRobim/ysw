import { Request, Response, Router } from 'express';
import { structure_routes } from './modules/structure/structure.rotues';
import { tag_routes } from './modules/tag/tag.rotues';
import { user_routes } from './modules/user/user.rotues';

const router = Router();

router.use('/structure', structure_routes);
router.use('/tag', tag_routes);
router.use('/user', user_routes);

router.use('*', (req: Request, res: Response) => {
  res.status(404).send({
    message: 'Incorrect general route',
    url: req.baseUrl + req.url,
  });
});

export { router };
