
import TaskActions from "@/components/dashboard/tasks/TaskActions";
import { DataTable } from "@/components/dashboard/tasks/table/DataTable";
import { columns } from "@/components/dashboard/tasks/table/columns";

import { createClient } from "@/lib/services/supabase/client/server-client";
import { TablePaths } from "@/lib/services/supabase/constants/tables";
import { Task } from "@/lib/types/tasks";

import { NextPage } from "next";
import { cookies } from "next/headers";
import React from "react";

const TasksPage: NextPage = async () => {
  const client = await createClient(cookies())
  const {data, error} = await client.from(TablePaths.TASKS).select("*").returns<Task[]>()

  if(error) throw error

  return (
    <section className="flex flex-col gap-10">
      <TaskActions />
      <DataTable columns={columns} data={data!} />
    </section>
  );
};

export default TasksPage;
