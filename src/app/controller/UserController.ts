import { NextFunction, Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const userCreated = await UserService.index();
      res.status(200).json(userCreated);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userById = await UserService.search(id);
      res.status(201).json(userById);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, phone, imageUrl } = req.body;
      const userData = {
        name,
        phone,
        imageUrl,
        id,
      };

      await UserService.edit(userData);

      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      next(error);
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phone, imageUrl } = req.body;
      const userData = {
        name,
        email,
        phone,
        imageUrl,
      };

      const msgUserCreated = await UserService.add(userData);
      res.status(201).json({ message: msgUserCreated });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await UserService.remove(id);
      res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
