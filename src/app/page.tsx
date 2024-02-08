import BlogLayout from "@/components/blog/BlogLayout";
import { Button } from "@/components/ui/Button";
import { URLS } from "@/lib/consts/urls";
import { getAllUniqueTags, getAllVisiblePosts } from "@/lib/services/contentlayer/utils";
import Link from "next/link";
import React, { FC } from "react";

const Home: FC = async () => {
  const posts = await getAllVisiblePosts();
  const tags = await getAllUniqueTags(posts);
  return (
    <main className="page-container">
      <section className="text-center flex flex-col gap-5 py-10 items-center">
        <h1 className="h1 tracking-tighter">Shaping Digital Futures</h1>
        <h4 className="h4 text-muted-foreground">
          Utilizing modern coding standards and cutting-edge technologies, I develop efficient,
          robust, and accessible front end solutions, ensuring seamless user interactions and a
          solid digital foundation for your business.
        </h4>
        <div className="flex gap-2 items-center">
          <Button asChild className="w-40" >
            <Link href={URLS.PROJECTS}>Projects</Link>
          </Button>
          <Button asChild variant="outline"  className="w-40">
            <Link href={URLS.CONTACT}>Contact me</Link>
          </Button>
        </div>
      </section>
      <BlogLayout posts={posts} uniqueTags={tags} header="Recently published" />
    </main>
  );
};

export default Home;
