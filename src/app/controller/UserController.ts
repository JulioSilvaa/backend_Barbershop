import { NextFunction, Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const msg = await UserService.index();
      console.log(msg);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async store(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
