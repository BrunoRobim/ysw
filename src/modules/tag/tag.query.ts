import { tag } from '@prisma/client';
import { prisma } from '../../shared/services/db/prisma_client.service';
class TagQuery {
  async find_all_tag() {
    const dbResult = await prisma.tag.findMany({});
    return dbResult;
  }

  async find_by_name(name: string) {
    const dbResult = await prisma.tag.findFirst({
      where: {
        name: name,
      } as tag,
    });
    return dbResult;
  }

  async create_tag(name: string, id_structure: string) {
    try {
      const dbResult = await prisma.tag.create({
        data: {
          name: name,
          structureId_structure: id_structure,
        } as tag,
      });
      return dbResult;
    } catch (err: any) {
      console.log(err);
    }
  }

  async delete_tag(name: string) {
    try {
      const dbResult = await prisma.tag.delete({
        where: {
          id_tag: name,
        } as tag,
      });
      return dbResult;
    } catch (err: any) {
      console.log(err);
    }
  }
}

export { TagQuery };
