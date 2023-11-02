import Fastify from "fastify";
import { logger } from "./logger";
import { articleRoutes } from "../modules/article/article.routes";

export function buildServer() {
  const server = Fastify({
    logger,
  });

  /*
   * TODO: Register plugins.
   */

  /*
   * INFO: Register routes.
   */
  server.register(articleRoutes, { prefix: "/api/v1/articles" });

  return server;
}
