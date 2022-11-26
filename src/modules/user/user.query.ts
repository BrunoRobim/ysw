import { tag, user } from '@prisma/client';
import { prisma } from '../../shared/services/db/prisma_client.service';
class UserQuery {
  async find_all() {
    const dbResult = await prisma.user.findMany({});
    return dbResult;
  }

  async find_by_name(name: string) {
    const dbResult = await prisma.user.findFirst({
      where: {
        name: name,
      } as user,
    });
    return dbResult;
  }

  async create(name: string, email: string, pass: string) {
    try {
      const dbResult = await prisma.user.create({
        data: {
          name: name,
          email: email,
          pass: pass,
        } as user,
      });
      return dbResult;
    } catch (err: any) {
      console.log(err);
    }
  }

  async delete(name: string) {
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

export { UserQuery };
