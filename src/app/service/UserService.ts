import { IUser } from "../../interfaces/interface";
import UserRepository from "../repository/UserRepository";

class UserService {
  async index() {
    const userList = await UserRepository.index();
    if (userList.length <= 0) {
      throw new Error("Lista sem usuários cadastrados!");
    } else {
      return userList;
    }
  }

  async show(email: string) {
    const filteredUser = await UserRepository.findUserByEmail(email);
    return filteredUser;
  }

  async edit(userData: IUser) {
    await UserRepository.update(userData);
  }

  async search(id: string) {
    const filteredUserById = await UserRepository.findById(id);
    if (filteredUserById === null) {
      throw new Error("Usuário não encontrado");
    }
    return filteredUserById;
  }

  async remove(id: string) {
    await UserRepository.deleteUser(id);
  }

  async add(userData: IUser) {
    const { name, email, phone } = userData;
    if (!name || !email || !phone) {
      throw new Error("Preencher todos os campos");
    }
    const filteredUserExist = await UserRepository.findUserByEmail(email);
    if (filteredUserExist) {
      throw new Error("Usuário já existe");
    } else {
      await UserRepository.createNewUser(userData);
      return "Usuário criado com sucesso";
    }
  }
}
export default new UserService();
