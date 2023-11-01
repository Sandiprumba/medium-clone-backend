import Fastify from "fastify";
import { logger } from "./logger";

export function buildServer() {
  const server = Fastify({
    logger,
  });

  return server;
}
