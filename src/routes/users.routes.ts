import { Router } from "express";
import {
  getUsersMiddleware,
  getUserByIdMiddleware,
  createUserMiddleware,
  deleteUserMiddleware,
  updateUserMiddleware
} from "../middleware/users.middleware";

const router = Router();

router.get("/", getUsersMiddleware);
router.get("/:id", getUserByIdMiddleware);
router.post("/", createUserMiddleware);
router.put("/:id", updateUserMiddleware);
router.delete("/:id", deleteUserMiddleware);

export default router;
