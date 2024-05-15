import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { userRepository, Users } from "../models/User.model";

/*
  * Function to create a user
  * @param data User data
  * @returns Promise
  */
export const createUser = (data: QueryDeepPartialEntity<Users>) => {
  return userRepository.insert(data);
}

/**
 * Function to get all users
 * @returns Promise
 */
export const getUsers = () => {
  return userRepository.find();
}

/**
 * Function to get a user by ID
 * @param id User ID
 * @returns Promise
 */
export const getUserById = (id: number) => {
  return userRepository.findOneBy({ id });
}

/**
 * Function to get a user by email
 * @param email User email
 * @returns Promise
 */
export const getUserByEmail = (email: string) => {
  return userRepository.findOneBy({ email });
}

/**
 * Function to delete a user
 * @param id User ID
 * @returns Promise
 */
export const deleteUser = (id: number) => {
  return userRepository.delete({ id });
}

/**
 * Function to update a user
 * @param id User ID
 * @param data User data
 * @returns Promise
 */
export const updateUser = (id: number, data: QueryDeepPartialEntity<Users>) => {
  return userRepository.update({ id }, data);
}
