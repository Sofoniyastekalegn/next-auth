import { db } from "@/db/drizzle";

import { schema } from "@/db/schema";
;

import { betterAuth } from "better-auth/adapters/drizzle";

import { nextCookies } from "better-auth/next-js";
import { PgDatabase, PgSchema } from "drizzle-orm/pg-core";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true

    },

    database: drizzleAdapter(db, {
        provider: "pg",
        shcema: schema 

    }),

    plugins: [nextCookies()]
});


