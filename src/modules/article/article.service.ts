import prisma from "../../db/prisma";
import { TArticleBody } from "./article.schema";

export async function createArticle(data: TArticleBody) {
  const article = await prisma.article.create({
    data,
  });

  return article;
}

export async function fetchArticles() {
  const articles = await prisma.article.findMany();

  return articles;
}

export async function fetchArticleById(id: string) {
  const article = await prisma.article.findUnique({
    where: {
      id,
    },
  });

  return article;
}
