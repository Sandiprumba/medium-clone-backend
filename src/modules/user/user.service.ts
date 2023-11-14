import prisma from "../../db/prisma";
import { TUserBody } from "./user.schema";

export async function createUser(data: TUserBody) {
  const user = await prisma.user.create({
    data,
  });

  return user;
}

export async function fetchUsers() {
  const users = await prisma.user.findMany();

  return users;
}
