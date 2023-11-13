import { FastifyReply, FastifyRequest } from "fastify";
import { createArticle } from "./article.service";
import { logger } from "../../utils/logger";
import { TArticle } from "./article.schema";

export async function createArticleHander(
  req: FastifyRequest<{
    Body: TArticle;
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
