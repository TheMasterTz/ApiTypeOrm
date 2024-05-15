// import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { z } from "zod";

import UserRoutes from "../routes/users.routes";
import AuthRoutes from "../routes/auth.routes";

// Load environment variables
const envSchema = z.object({
  PORT: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});

envSchema.parse(process.env);

// infer the type of the environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

// create express app
const app = express();

// Set allowed connections
app.use(cors({ origin: "*" }));

// Parse to JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Set up logging
app.use(morgan("dev"));

// Set up routes
app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);

export default app;
