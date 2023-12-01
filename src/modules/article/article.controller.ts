import { FastifyReply, FastifyRequest } from "fastify";
import {
  createArticle,
  fetchArticleById,
  fetchArticles,
  fetchTrendingArticles,
} from "./article.service";
import { logger } from "../../utils/logger";
import { TArticleBody } from "./article.schema";

export async function createArticleHandler(
  req: FastifyRequest<{
    Body: TArticleBody;
  }>,
  res: FastifyReply,
) {
  const body = req.body;

  try {
    const article = await createArticle(body);
    res.code(201).send(article);
  } catch (e) {
    logger.error(e);

    res.code(500).send({ message: "Error - can not create an article" });
  }
}

export async function fetchArticlesHandler() {
  const articles = await fetchArticles();

  return articles;
}

export async function fetchTrendingArticlesHandler() {
  const trendingArticles = await fetchTrendingArticles();

  return trendingArticles;
}

export async function fetchArticleByIdHandler(
  req: FastifyRequest<{
    Params: { id: string };
  }>,
  res: FastifyReply,
) {
  const { id } = req.params;
  if (!id) return res.code(400).send({ message: "Invalid article ID" });

  try {
    const article = fetchArticleById(id);
    res.code(200).send(article);
  } catch (e) {
    logger.error(e);

    res.code(500).send(e);
  }
}
