"use-server"
import { cookies } from "next/headers";
import { createClient } from "../../client/server-client";
import { TablePaths } from "../../constants/tables";

export const deleteTask = async (id: string): Promise<boolean> => {
  const client = await createClient(cookies());
  const { error } = await client.from(TablePaths.TASKS).delete().eq("id", id);

  if (error) throw error;

  return true;
};
