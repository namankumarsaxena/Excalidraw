import "dotenv/config";
import { Pool } from "pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = new URL(process.env.DATABASE_URL!);

const pool = new Pool({
  host: "18.226.241.3", // Use the IP that successfully connected
  port: 5432,
  database: databaseUrl.pathname.slice(1),
  user: decodeURIComponent(databaseUrl.username),
  password: decodeURIComponent(databaseUrl.password),

  ssl: {
    rejectUnauthorized: false,
    servername:
      "ep-lingering-scene-axbr8f9u-pooler.c-4.us-east-2.aws.neon.tech",
  },

  options: "endpoint=ep-lingering-scene-axbr8f9u-pooler",

  connectionTimeoutMillis: 15000,
});

const adapter = new PrismaPg(pool);

export const prismaClient = new PrismaClient({
  adapter,
});