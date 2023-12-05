import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";

import { Cards } from "@/components/test/Card";

const POST_PATH = "_posts";

export default async function RootLayout() {
  // ファイルの中身を取得
  const postsDirectory = path.join(process.cwd(), POST_PATH);
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace(".md", ""),
        frontmatter: data,
      };
    })
  );

  const postItems = posts.map((post) => {
    return {
      title: post.frontmatter.title,
      excerpt: post.frontmatter.excerpt,
      coverImage: post.frontmatter.coverImage,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      href: `/posts/${post.slug}`,
    };
  });

  return (
    <div>
      <h1>ブログ一覧</h1>
      <Cards posts={postItems} />
    </div>
  );
}
