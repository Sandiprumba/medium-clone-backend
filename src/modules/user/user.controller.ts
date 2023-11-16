import { FastifyReply, FastifyRequest } from "fastify";
import { TUserBody } from "./user.schema";
import { createUser, fetchOneUser, fetchUsers } from "./user.service";
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

export async function fetchUsersHandler() {
  const users = await fetchUsers();

  return users;
}

export async function fetchOneUserHander(
  req: FastifyRequest<{
    Params: { id: string };
  }>,
  res: FastifyReply,
) {
  const { id } = req.params;
  if (!id) return res.code(400).send({ message: "Invalid article ID" });

  try {
    const user = await fetchOneUser(id);
    res.code(200).send(user);
  } catch (e) {
    logger.error(e);

    res.code(500).send(e);
  }
}
