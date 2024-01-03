import { getShortPostLikes } from "@/lib/services/supabase/utils/utils";
import { HeartIcon } from "lucide-react";
import React, { FC } from "react";
import ShortLikeAction from "./ShortLikeAction";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

interface ShortLikesProps {
    id: number
}


const ShortLikes: FC<ShortLikesProps> = async ({id}) => {
    const likes = await getShortPostLikes(id)
    const sessionId = cookies().get("sessionId")?.value
    const isLiked = likes.includes(sessionId)

  return (
    <ShortLikeAction id={id}>
      <HeartIcon className={cn("w-5 h-5", isLiked && "fill-foreground")} />
      <span className="font-medium">{likes.length} likes</span>
    </ShortLikeAction>
  );
};

export default ShortLikes;
