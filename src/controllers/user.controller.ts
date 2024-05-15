import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { AppDataSources } from "../database/connection";
import { Users } from "../models/User.model";

/*
  * Function to create a user
  * @param data User data
  * @returns Promise
  */
export const createUser = (data: QueryDeepPartialEntity<Users>) => {
  return AppDataSources
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values(data)
    .execute();
}

/**
 * Function to get all users
 * @returns Promise
 */
export const getUsers = () => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .getMany();
}

/**
 * Function to get a user by ID
 * @param id User ID
 * @returns Promise
 */
export const getUserById = (id: number) => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .where("id = :id", { id })
    .getOne();
}

/**
 * Function to get a user by email
 * @param email User email
 * @returns Promise
 */
export const getUserByEmail = (email: string) => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .where("email = :email", { email })
    .getOne();
}

/**
 * Function to delete a user
 * @param id User ID
 * @returns Promise
 */
export const deleteUser = (id: number) => {
  return AppDataSources
    .createQueryBuilder()
    .delete()
    .from(Users)
    .where("id = :id", { id })
    .execute();
}

/**
 * Function to update a user
 * @param id User ID
 * @param data User data
 * @returns Promise
 */
export const updateUser = (id: number, data: QueryDeepPartialEntity<Users>) => {
  return AppDataSources
    .createQueryBuilder()
    .update(Users)
    .set(data)
    .where("id = :id", { id })
    .execute();
}
