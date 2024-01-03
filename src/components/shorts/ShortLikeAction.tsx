"use client";
import { handleLike } from "@/lib/services/supabase/utils/actions";
import React, { FC, ReactNode, useTransition } from "react";
import { cn } from "@/lib/utils";

const ShortLikeAction: FC<{ id: number; children: ReactNode }> = ({ id, children }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await handleLike(id)
    })
  }

  

  return (
    <button onClick={handleClick} disabled={isPending} className={cn("flex gap-2 px-4", isPending && "opacity-70")}>
      {children}
    </button>
  );
};

export default ShortLikeAction;
