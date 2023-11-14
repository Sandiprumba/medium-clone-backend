import { FastifyInstance } from "fastify";
import { TUserSchema } from "./user.schema";
import { createUserHandler, fetchUserHandler } from "./user.controller";

export async function userRoutes(app: FastifyInstance) {
  // Get User.
  app.get("/", fetchUserHandler);

  // User sign up
  // TODO: add schema and controller
  app.post("/register", { schema: TUserSchema }, createUserHandler);

  // User Sign in
  // TODO: add schema and controller
  app.post("/login", {}, () => {});
}
