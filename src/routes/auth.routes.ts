import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/login", authMiddleware);

export default router;
