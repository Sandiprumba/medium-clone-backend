import { FastifyInstance } from "fastify";
import {
  createArticleHandler,
  fetchArticleByIdHandler,
  fetchArticlesHandler,
  fetchTrendingArticlesHandler,
} from "./article.controller";
import { TArticleSchema } from "./article.schema";

export async function articleRoutes(app: FastifyInstance) {
  // Create an article.
  app.post("/", { schema: TArticleSchema }, createArticleHandler);

  // Get Articles.
  app.get("/", fetchArticlesHandler);

  // Get Articles.
  app.get("/trending", fetchTrendingArticlesHandler);

  // Get One Article.
  app.get("/:id", fetchArticleByIdHandler);
}
