"use server";

import { cookies } from "next/headers";
import { getShortPostLikes } from "./utils";
import { createClient } from "../client/server-client";
import { revalidatePath } from "next/cache";
import { TablePaths } from "../constants/tables";

export const handleLike = async (id: number) => {
  // current likes
  const likes = await getShortPostLikes(id);

  // client and store
  const cookiesStore = cookies();
  const sessionId = cookiesStore.get("sessionId")?.value;
  const client = await createClient(cookiesStore);

  // action

  if (!likes.includes(sessionId)) {
    await client
      .from(TablePaths.SHORTS)
      .update({ likes: [...likes, sessionId] })
      .eq("id", id);

    revalidatePath("/")
    return;
  }

  await client
    .from(TablePaths.SHORTS)
    .update({ likes: likes.filter((like: string) => like !== sessionId) })
    .eq("id", id);

    revalidatePath("/")
};
