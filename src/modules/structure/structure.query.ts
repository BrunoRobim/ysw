import { structure } from '@prisma/client';
import { prisma } from '../../shared/services/db/prisma_client.service';
class StructureQuery {
  async find_all_structures() {
    const dbResult = await prisma.structure.findMany({});
    return dbResult;
  }

  async find_by_name(name: string) {
    console.log(name);

    const dbResult = await prisma.structure.findFirst({
      where: {
        name: name,
      } as structure,
    });
    return dbResult;
  }

  async create_structure(name: string, description: string) {
    const dbResult = await prisma.structure.create({
      data: {
        name: name,
        description: description,
      } as structure,
    });
    return dbResult;
  }

  async delete_structure(name: string) {
    const dbResult = await prisma.structure.delete({
      where: {
        name: name,
      },
    });
    return dbResult;
  }
}

export { StructureQuery };
