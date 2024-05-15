import dotenv from "dotenv";
dotenv.config();

import app from "./config/server.config";
import { connect } from "./database/connection";

function main() {
  app.listen(process.env.PORT, async () => {
    console.time("  \x1b[32m\x1b[1m• API Express\x1b[0m \x1b[32mv0.0.1\x1b[0m  \x1b[30mready in\x1b[0m")
    // Connect to database
    await connect();
    console.timeEnd("  \x1b[32m\x1b[1m• API Express\x1b[0m \x1b[32mv0.0.1\x1b[0m  \x1b[30mready in\x1b[0m")
    console.log(`    \x1b[32m➜  \x1b[0m\x1b[1mLocal:\x1b[0m   \x1b[36mhttp://localhost:\x1b[1m${process.env.PORT}\x1b[0m\x1b[36m/api\x1b[0m`);
  });
}

void main();
