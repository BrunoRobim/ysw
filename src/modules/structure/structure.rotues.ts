import { Request, Response, Router } from 'express';
import { Structure } from './structure.controller';

const structure_routes = Router();
const structureC = new Structure();

structure_routes.use('/getAllStructures', structureC.get_all_structures);
structure_routes.use(
  '/getStructuresByName/:id',
  structureC.get_structure_by_name
);
structure_routes.use('/createStructure', structureC.create_structure);
structure_routes.use('/deleteStructure', structureC.delete_structure);

structure_routes.use('*', (req: Request, res: Response) => {
  res.status(403).send({
    message: 'Incorrect structure module route!',
    url: req.baseUrl + req.url,
  });
});

export { structure_routes };
