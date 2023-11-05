import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
  // User sign up
  // TODO: add schema and controller
  app.post("/register", {}, () => {});

  // User Sign in
  // TODO: add schema and controller
  app.post("/login", {}, () => {});
}
