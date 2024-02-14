"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  AlignJustifyIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsUpIcon,
  CrossIcon,
  HelpCircleIcon,
  WatchIcon,
} from "lucide-react";

import DataTableRowActions from "@/components/dashboard/tasks/table/DataTableRowActions";
import { Task } from "@/lib/types/tasks";

export const statusOptions = [
  {
    label: "Backlog",
    value: "BACKLOG",
    icon: HelpCircleIcon,
  },
  {
    label: "In progress",
    value: "IN_PROGRESS",
    icon: WatchIcon,
  },
  {
    label: "Canceled",
    value: "CANCELED",
    icon: CrossIcon,
  },
  {
    label: "Completed",
    value: "COMPLETED",
    icon: CheckCircleIcon,
  },
];

export const priorityOptions = [
  {
    label: "Low",
    value: "LOW",
    icon: ChevronDownIcon,
  },
  {
    label: "Medium",
    value: "MEDIUM",
    icon: AlignJustifyIcon,
  },
  {
    label: "High",
    value: "HIGH",
    icon: ChevronUpIcon,
  },
  {
    label: "Urgent",
    value: "URGENT",
    icon: ChevronsUpIcon,
  },
];

export const labelOptions = [
  {
    label: "Life",
    value: "LIFE",
  },
  {
    label: "Financial",
    value: "FINANCIAL",
  },
  {
    label: "Work",
    value: "WORK",
  },
  {
    label: "Training",
    value: "TRAINING",
  },
];

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className="first-letter:uppercase truncate max-w-[100px] ">{row.getValue("title")}</div>;
    },
  },

  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const label = row.original.label;
      const content = row.getValue("content") as string;
      return (
        <div className=" rounded-md flex gap-2 items-center">
          {!!label && (
            <span className="text-center bg-muted rounded-md p-0.5 px-1 text-xs">
              {label.toLowerCase()}
            </span>
          )}
          <span className="first-letter:uppercase truncate max-w-[300px]">{content}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = statusOptions.find((s) => s.value === row.getValue("status"))!;
      return (
        <div className="flex w-[100px] items-center">
          {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = priorityOptions.find(
        (priority) => priority.value === row.getValue("priority")
      )!;
      return (
        <div className="flex items-center">
          {priority.icon && <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({row}) => <DataTableRowActions taskValues={row.original} />
    
  },
];
