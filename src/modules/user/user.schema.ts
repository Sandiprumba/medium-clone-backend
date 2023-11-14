import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

export type TUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
};

const createUserBodySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is a mandatory field" }).email(),
  avatar: z.string(),
  bio: z.string(),
});

export type TUserBody = z.infer<typeof createUserBodySchema>;

export const TUserSchema = {
  body: zodToJsonSchema(createUserBodySchema, "TUserSchema"),
};
