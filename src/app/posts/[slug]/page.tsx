// Static Site Generation

import fs from "fs";
import path from "path";
import markdownToHtml from "zenn-markdown-html";
import matter from "gray-matter";
import "zenn-content-css";

const POST_PATH = "_posts";

// Static Site Generationの場合、generateStaticParamsを定義する必要がある
export const generateStaticParams = () => {
  // ファイルの中身を取得
  const postsDirectory = path.join(process.cwd(), POST_PATH);
  const fileNames = fs.readdirSync(postsDirectory);

  // fileNamesからslugを取得
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(".md", ""),
    };
  });
};

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

  const contentWithNextImage = contentHTML.replace(/<img/g, "<Image").replace(/\/>/g, "/>");

  return (
    <article className="znc">
      <div className="znc mt-10" dangerouslySetInnerHTML={{ __html: contentWithNextImage }} />
    </article>
  );
}
