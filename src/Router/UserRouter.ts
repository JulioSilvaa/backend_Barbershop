import { Router } from "express";
import UserController from "../app/controller/UserController";

const router = Router();

router.get("/user", UserController.index);

export default router;
