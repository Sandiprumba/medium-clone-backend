import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export type TArticle = {
  id: string;
  title: string;
  summary: string;
  image: string;
  published: boolean;
  markdown: string;
  authorId: string;
};

const createArticleBodySchema = z.object({
  title: z.string({
    required_error: "Article title is required",
    invalid_type_error: "Invalid type",
  }),
  summary: z.string(),
  image: z.string(),
  published: z.boolean(),
  markdown: z.string(),
  authorId: z.string(),
});

export type TArticleBody = z.infer<typeof createArticleBodySchema>;

export const TArticleSchema = {
  body: zodToJsonSchema(createArticleBodySchema, "TArticleSchema"),
};
