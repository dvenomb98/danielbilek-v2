import { Shorts } from "@/lib/types/general";
import Image from "next/image";
import React, { FC, Suspense } from "react";
import ShortAuthor from "./ShortAuthor";
import ShortLikes from "./ShortLikes";
import ShortLikesSkeleton from "./ShortLikesSkeleton";

interface ShortPostProps {
  data: Shorts;
}

const ShortPost: FC<ShortPostProps> = ({ data }) => {
  const { image, author, description, date, id } = data;

  return (
    <div className="flex flex-col gap-4">
      <ShortAuthor author={author} date={date} />
      <Image src={image} alt="Post image" className="border rounded-md" />
      <Suspense fallback={<ShortLikesSkeleton />}>
        <ShortLikes id={id} />
      </Suspense>
      <p className="px-4"><span className="font-bold">{author.name}</span> {description}</p>
    </div>
  );
};

export default ShortPost;
