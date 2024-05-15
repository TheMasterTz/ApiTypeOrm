import { RequestHandler } from "express";
import { Users } from "../models/User.model";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/User.controller";

/**
 * Middleware to create a user
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const createUserMiddleware: RequestHandler = async (req, res) => {
  const userData = req.body as QueryDeepPartialEntity<Users>;

  try {
    await createUser(userData);

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Middleware to get a user
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const getUsersMiddleware: RequestHandler = async (_, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Middleware to get a user by ID
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const getUserByIdMiddleware: RequestHandler = async (req, res) => {
  try {
    const user = await getUserById(parseInt(req.params.id));
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Middleware to delete a user
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const deleteUserMiddleware: RequestHandler = async (req, res) => {
  try {
    await deleteUser(parseInt(req.params.id));
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Middleware to update a user
 * @param req Request object
 * @param res Response object
 * @returns Response object
 */
export const updateUserMiddleware: RequestHandler = async (req, res) => {
  const userData = req.body as QueryDeepPartialEntity<Users>;

  try {
    await updateUser(parseInt(req.params.id), userData);
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
