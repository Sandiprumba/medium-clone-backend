import { FastifyInstance } from "fastify";

export async function articleRoutes(app: FastifyInstance) {
  // Create an article.
  app.post("/", {}, () => {});

  // Get Articles.
  app.get("/", {}, () => {});
}
