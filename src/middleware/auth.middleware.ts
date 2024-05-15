import { RequestHandler } from "express";
import { getUserByEmail } from "../controllers/User.controller";

/**
 * Middleware to authenticate a user
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const authMiddleware: RequestHandler = async (req, res) => {
  const userData = req.body as { email: string; password: string };

  if (!userData.email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!userData.password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    const user = await getUserByEmail(userData.email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== userData.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "User authenticated" });
  } catch (error) {
    console.error("Error authenticating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
