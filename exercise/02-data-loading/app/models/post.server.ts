import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getPostListItems() {
  return prisma.post.findMany({ select: { slug: true, title: true } });
}
