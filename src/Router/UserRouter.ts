import { Router } from "express";
import UserController from "../app/controller/UserController";

const router = Router();

router.get("/user", UserController.index);
router.post("/user", UserController.store);
router.get("/user/:id", UserController.show);
router.delete("/user/:id", UserController.delete);
router.patch("/user/:id", UserController.update);

export default router;
