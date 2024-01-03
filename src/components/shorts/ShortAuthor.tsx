import { ShortsAuthor } from "@/lib/types/general";
import moment from "moment";
import Image from "next/image";
import React, { FC } from "react";

interface ShortAuthorProps {
  author: ShortsAuthor;
  date: string;
}

const ShortAuthor: FC<ShortAuthorProps> = ({ author, date }) => {
  const { name, image } = author;
  return (
    <div className="flex gap-2 items-center px-4">
      <Image src={image} alt={name} className="w-10 h-10 rounded-full border border-foreground" />
      <p className="font-bold text-sm">
        {name}{" "}
        <span className="text-muted-foreground font-normal">
          &bull; {moment(date).format("YYYY-MM-DD")}
        </span>{" "}
      </p>
    </div>
  );
};

export default ShortAuthor;
