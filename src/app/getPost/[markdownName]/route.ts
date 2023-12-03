import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import markdownToHtml from "zenn-markdown-html";
import matter from "gray-matter";

const POST_PATH = "_posts";

export async function GET(request: Request, { params }: { params: { markdownName: string } }) {
  const markdownName = params.markdownName;
  const filePath = path.join(process.cwd(), POST_PATH, `${markdownName}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // markdown to DOM
  const contentHTML = await markdownToHtml(content || "", {
    embedOrigin: "https://embed.zenn.studio",
  });
  return NextResponse.json(contentHTML);
}
