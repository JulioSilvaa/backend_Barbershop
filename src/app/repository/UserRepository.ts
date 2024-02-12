import { IUser } from "../../interfaces/interface";
import { prisma } from "./prismaCliente";

class UserRepository {
  async index() {
    const userList = prisma.user.findMany({
      select: {
        name: true,
        phone: true,
        imageUrl: true,
      },
    });
    return userList;
  }

  async findUserByEmail(email: string) {
    const user = prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async update({ id, name, phone, imageUrl }: IUser) {
    await prisma.user.update({
      where: { id },
      data: { name, phone, imageUrl },
    });
  }

  async findById(id: string) {
    const findUser = await prisma.user.findFirst({
      where: { id },
    });
    return findUser;
  }

  async deleteUser(id: string) {
    await prisma.user.delete({ where: { id } });
  }

  async createNewUser(userData: IUser) {
    await prisma.user.create({
      data: userData,
    });
  }
}

export default new UserRepository();
