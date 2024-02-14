"use client";
import React, { FC } from "react";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../../ui/Sheet";
import { Form, Formik } from "formik";
import { Input } from "../../ui/form/Input";
import { Button } from "../../ui/Button";
import SelectInput from "../../ui/form/select/Select";
import { generateRandomUid } from "@/lib/utils";
import client from "@/lib/services/supabase/client/public-client";
import { TablePaths } from "@/lib/services/supabase/constants/tables";
import { useToast } from "@/hooks/useToast";
import { Task } from "@/lib/types/tasks";
import { useRouter } from "next/navigation";
import { labelOptions, priorityOptions, statusOptions } from "./table/columns";
import TaskSheetView from "./TaskSheetView";

type OmitedTask = Omit<Task, "created_at">;
export type TaskAction = "CREATE" | "EDIT" | "VIEW" | "CLOSE";

interface TaskSheetContentProps {
  action: TaskAction;
  providedValues?: OmitedTask;
  toggle: () => void;
}

const mappedActionText = {
  CREATE: {
    title: "Create a new task",
    description: "This action will create a new task in database",
  },
  EDIT: {
    title: "Edit task",
    description: "This action will edit current task in database",
  },
  VIEW: {
    title: "View a task",
    description: "Here you can find detailed informations about your task",
  },
  CLOSE: {
    title: "",
    description: "",
  },
};

const initialValues: OmitedTask = {
  id: "",
  title: "",
  content: "",
  status: "BACKLOG",
  priority: "LOW",
  label: "WORK",
};

const TaskSheetContent: FC<TaskSheetContentProps> = ({ action, providedValues, toggle }) => {
  const { toast } = useToast();
  const router = useRouter();

  const text = mappedActionText[action];

  const handleSubmit = async (values: OmitedTask) => {
    switch (action) {
      case "CREATE": {
        const createdValues = {
          ...values,
          id: generateRandomUid(),
        };
        const { error } = await client.from(TablePaths.TASKS).insert(createdValues);
        if (error) {
          toast({
            title: `${values.title}`,
            description: "There was an error during create a task action!",
          });
          return;
        }
        toast({
          title: `${values.title}`,
          description: "was sucessfully created!",
        });
        router.refresh();
        toggle();
        break;
      }
      case "EDIT": {
        const { error } = await client.from(TablePaths.TASKS).update(values).eq("id", values.id);
        if (error) {
          toast({
            title: `Task: ${values.title}`,
            description: "There was an error during update a task action!",
          });
          return;
        }
        toast({
          title: `Task: ${values.title}`,
          description: "was sucessfully updated!",
        });
        router.refresh();
        toggle();
        break;
      }
    }
  };

  return (
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>{text.title}</SheetTitle>
        <SheetDescription>{text.description}</SheetDescription>
      </SheetHeader>
      {action === "VIEW" && <TaskSheetView values={providedValues!} />}
      {(action === "EDIT" || action === "CREATE") && (
        <Formik initialValues={providedValues || initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <Input label="Title" name="title" />
              <Input label="Content" name="content" />
              <SelectInput name="status" label="Status" options={statusOptions} />
              <SelectInput name="priority" label="Priority" options={priorityOptions} />
              <SelectInput name="label" label="Label" options={labelOptions} />
              <Button type="submit" className="mt-5" loading={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </SheetContent>
  );
};

export default TaskSheetContent;
