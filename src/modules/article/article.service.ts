import prisma from "../../db/prisma";
import { TArticle } from "./article.schema";

export async function createArticle(data: TArticle) {
  const article = await prisma.article.create({
    data,
  });

  return article;
}

export async function fetchArticles() {
  const articles = await prisma.article.findMany();

  return articles;
}
