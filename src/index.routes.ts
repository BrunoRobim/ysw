import { Request, Response, Router } from 'express';

const router = Router();

router.use('*', (req: Request, res: Response) => {
  res.status(404).send({
    message: 'Incorrect general route',
    url: req.baseUrl + req.url,
  });
});

export { router };
