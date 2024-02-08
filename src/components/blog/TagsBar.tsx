import { TagStructure } from "@/lib/types/general";
import React, { FC } from "react";
import Tag from "./Tag";

interface TagsBarProps {
  tags: TagStructure[];
  activeTag?: string;
}

const TagsBar: FC<TagsBarProps> = ({ tags, activeTag }) => {
  if (!tags.length) return null;

  return (
    <div className="flex flex-col gap-10">
      <h3 className="h3">Popular tags</h3>
      <ul className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} count={tag.count} activeTag={activeTag} />
        ))}
      </ul>
    </div>
  );
};

export default TagsBar;
