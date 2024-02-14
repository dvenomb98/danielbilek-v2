"use client";
import React, { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/Button";
import { AlertTriangleIcon, MoreHorizontalIcon } from "lucide-react";
import { Sheet } from "@/components/ui/Sheet";
import TaskSheetContent, { TaskAction } from "../TaskSheetContent";
import { Task } from "@/lib/types/tasks";
import client from "@/lib/services/supabase/client/public-client";
import { TablePaths } from "@/lib/services/supabase/constants/tables";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps {
  taskValues: Task;
}

const DataTableRowActions: FC<DataTableRowActionsProps> = ({ taskValues }) => {
  const [state, setState] = useState<TaskAction>("CLOSE");
  const { toast } = useToast();
  const router = useRouter();
  const open = state !== "CLOSE";

  const handleDelete = async () => {
    try {
      const { error } = await client.from(TablePaths.TASKS).delete().eq("id", taskValues.id);
      if (error) throw error;

      toast({
        title: `Task: ${taskValues.title}`,
        description: "was sucessfully deleted!",
      });
    } catch (error: any) {
      toast({
        title: `There was an error!`,
        description: `Could not delete task: ${taskValues.title}. Error: ${error?.message}`,
        variant: "destructive",
      });
    } finally {
      router.refresh();
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 px-2 py-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setState("VIEW")}>View task</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setState("EDIT")}>Edit task</DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDelete}
            className="text-destructive focus:bg-destructive/50"
          >
            <AlertTriangleIcon className="w-3 h-3 mr-2" />
            Delete task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={open} onOpenChange={() => setState("CLOSE")}>
        <TaskSheetContent
          toggle={() => setState("CLOSE")}
          action={state}
          providedValues={taskValues}
        />
      </Sheet>
    </>
  );
};

export default DataTableRowActions;
