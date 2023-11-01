import { z } from "zod";
import zennv from "zennv";

const envSchema = z.object({
  PORT: z.number(),
});

const env = zennv({
  dotenv: true,
  schema: envSchema,
});

export default env;
