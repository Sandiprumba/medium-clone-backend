import { FastifyInstance } from "fastify";
import { createArticleHander } from "./article.controller";

export async function articleRoutes(app: FastifyInstance) {
  // Create an article.
  app.post("/", {}, createArticleHander);

  // Get Articles.
  app.get("/", {}, () => {});
}
