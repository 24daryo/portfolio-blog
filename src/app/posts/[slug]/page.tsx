import fs from "fs";
import path from "path";
import markdownToHtml from "zenn-markdown-html";
import matter from "gray-matter";
import "zenn-content-css";

const POST_PATH = "_posts";

export default async function Post({ params }: any) {
  // URLのパラメータから該当するファイル名を取得
  const { slug } = params;

  // ファイルの中身を取得
  const filePath = path.join(process.cwd(), POST_PATH, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // markdown to DOM
  const contentHTML = await markdownToHtml(content || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <article className="znc">
      <div className="znc mt-10" dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </article>
  );
}
