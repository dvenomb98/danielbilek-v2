import { Task } from "@/lib/types/tasks";
import React, { FC, ReactNode } from "react";
import { priorityOptions, statusOptions } from "./table/columns";

interface TaskSheetViewProps {
  values: Task | Omit<Task, "created_at">;
}

const TaskGroup: FC<{ title: string; value?: string; badge?: ReactNode }> = ({
  title,
  value,
  badge,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      {!!value && <p className="text-muted-foreground">{value}</p>}
      {!!badge && badge}
    </div>
  );
};

const TaskSheetView: FC<TaskSheetViewProps> = ({ values }) => {
  const priority = priorityOptions.find((priority) => priority.value === values.priority)!;
  const status = statusOptions.find((s) => s.value === values.status)!;

  return (
    <div className="flex flex-col gap-5 my-10">
      <TaskGroup title="Title" value={values.title} />
      <TaskGroup title="Content" value={values.content} />
      <div className="flex lg:items-center lg:justify-between sm:flex-col gap-5">
        <TaskGroup
          title="Status"
          badge={
            <div className="flex  items-center">
              {<status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
              <span className="text-muted-foreground">{status.label}</span>
            </div>
          }
        />
        <TaskGroup
          title="Priority"
          badge={
            <div className="flex  items-center">
              {<priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
              <span className="text-muted-foreground">{priority.label}</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TaskSheetView;
