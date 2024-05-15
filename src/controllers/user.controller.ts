import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { AppDataSources } from "../database/connection";
import { Users } from "../models/User.model";

export const createUser = (data: QueryDeepPartialEntity<Users>) => {
  return AppDataSources
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values(data)
    .execute();
}

export const getUsers = () => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .getMany();
}

export const getUserById = (id: number) => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .where("id = :id", { id })
    .getOne();
}

export const getUserByEmail = (email: string) => {
  return AppDataSources
    .createQueryBuilder()
    .select("users")
    .from(Users, "users")
    .where("email = :email", { email })
    .getOne();
}

export const deleteUser = (id: number) => {
  return AppDataSources
    .createQueryBuilder()
    .delete()
    .from(Users)
    .where("id = :id", { id })
    .execute();
}

export const updateUser = (id: number, data: QueryDeepPartialEntity<Users>) => {
  return AppDataSources
    .createQueryBuilder()
    .update(Users)
    .set(data)
    .where("id = :id", { id })
    .execute();
}
