import shorts from "@/data/shorts";
import React, { FC } from "react";
import ShortPost from "./ShortPost";

const ShortsLayout: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="h2 font-bold">Shorts</h2>
      <div className="grid grid-cols-2 grid-rows-auto sm:grid-cols-1 gap-x-4 gap-y-10">
        {shorts.map((short) => (
          <ShortPost key={short.id} data={short} />
        ))}
      </div>
    </div>
  );
};

export default ShortsLayout;
