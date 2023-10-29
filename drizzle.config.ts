import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({path:".env"});


export default {
  driver: "pg",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;

// npx drizzle-kit push:pg -> will look to our schema an ensure that oru database is updated