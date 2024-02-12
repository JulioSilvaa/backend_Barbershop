import { NextFunction, Request, Response } from "express";

class UserController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("userControlLer controlsnfo sd psts");
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
