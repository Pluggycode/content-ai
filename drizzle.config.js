
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.tsx",
  dbCredentials:{
    url:"postgresql://neondb_owner:zN1SjaioOL7f@ep-polished-night-a17u7n0x.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
  },
};