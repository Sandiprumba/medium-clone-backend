import { FastifyReply, FastifyRequest } from "fastify";
import { TUserBody } from "./user.schema";
import { createUser, fetchUsers } from "./user.service";
import { logger } from "../../utils/logger";

export async function createUserHandler(
  req: FastifyRequest<{ Body: TUserBody }>,
  res: FastifyReply,
) {
  const { body } = req;

  try {
    const user = await createUser(body);

    res.code(201).send(user);
  } catch (e) {
    logger.error(e);
    res.code(500).send(e);
  }
}

export async function fetchUserHandler() {
  const users = await fetchUsers();

  return users;
}
