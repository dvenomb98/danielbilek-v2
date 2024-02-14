"use client";
import React, { FC } from "react";
import { Sheet, SheetTrigger } from "../../ui/Sheet";
import { Button } from "../../ui/Button";
import TaskSheetContent from "./TaskSheetContent";
import { useToggle } from "react-use";

const CreateTask: FC = () => {
  const [open, toggle] = useToggle(false);
  return (
    <Sheet open={open} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <Button onClick={toggle}>Create a new</Button>
      </SheetTrigger>
      <TaskSheetContent toggle={toggle} action="CREATE" />
    </Sheet>
  );
};

export default CreateTask;
