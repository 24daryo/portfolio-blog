import { NextResponse } from "next/server";
// "use client";
import fs from "fs";
import path from "path";
import markdownToHtml from "zenn-markdown-html";
import matter from "gray-matter";
import { headers } from "next/headers";
import useSWR from "swr";

export async function GET() {
  // const { slug } = params;
  // const filePath = path.join(process.cwd(), POST_PATH, `${slug}.md`);

  // // ファイルの中身を取得
  // const fileContents = fs.readFileSync(filePath, "utf8");
  // const { data, content } = matter(fileContents);

  // // const content = "Hello World";

  // // markdown to DOM
  // const contentHTML = await markdownToHtml(content || "", {
  //   embedOrigin: "https://embed.zenn.studio",
  // });
  return NextResponse.json({ hello: "world" });
}
