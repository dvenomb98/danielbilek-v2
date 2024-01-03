import { cookies } from "next/headers";
import { createClient } from "../client/server-client";
import { TablePaths } from "../constants/tables";

export const getShortPostLikes = async (id: number) => {
  const cookiesStore = cookies();
  const client = await createClient(cookiesStore);
  const { data, error } = await client
    .from(TablePaths.SHORTS)
    .select("likes")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw new Error(error?.message, { cause: error?.code });

  return data.likes
};
