import { DataSource } from "typeorm";

export const AppDataSources = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "3306"),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [__dirname + "/../models/*.model.ts"],
  logging: ["error"],
})

export async function connect() {
  return AppDataSources.initialize()
}
