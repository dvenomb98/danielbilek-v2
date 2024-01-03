"use client";
import { handleLike } from "@/lib/services/supabase/utils/actions";
import React, { FC, ReactNode, useTransition } from "react";
import ShortLikesSkeleton from "./ShortLikesSkeleton";

const ShortLikeAction: FC<{ id: number; children: ReactNode }> = ({ id, children }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await handleLike(id)
    })
  }

  if(isPending) return <ShortLikesSkeleton />

  return (
    <button onClick={handleClick} disabled={isPending} className="flex gap-2 px-4">
      {children}
    </button>
  );
};

export default ShortLikeAction;
