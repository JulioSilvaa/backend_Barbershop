import UserRepository from "../repository/UserRepository";

class UserService {
  async index() {
    const msg = UserRepository.index();
    return msg;
  }
}
export default new UserService();
