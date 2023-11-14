import Fastify from "fastify";
import { logger } from "./logger";
import { articleRoutes } from "../modules/article/article.routes";
import { userRoutes } from "../modules/user/user.routes";

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
  server.register(userRoutes, { prefix: "/api/v1/users" });

  return server;
}
