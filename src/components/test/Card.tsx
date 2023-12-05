import Link from "next/link";

const Style = {
  Time: "text-gray-500 text-xs",
  Tag: "relative z-10 rounded-full px-3 py-1 font-medium text-gray-600 bg-gray-100 text-xs",
  Title: "mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600",
  Description: "mt-2 line-clamp-3 text-sm leading-6 text-gray-600",
  ImageNormal: "lg:h-48 md:h-48 w-full object-cover object-center",
  ImageHStack: "h-full w-32 object-cover",
  ImageRounded: "lg:h-48 md:h-48 w-full object-cover object-center rounded-lg",
  HStack: "flex items-center gap-x-4 mt-1",
  Holder2cols: "mx-auto grid grid-cols-1 gap-x-8 gap-y-4 mt-2 md:grid-cols-2",
  Holder3cols: "mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-6 mt-2 lg:grid-cols-3 md:grid-cols-2",
  CardNormal: "bg-white shadow-md border border-gray-200 rounded-lg mb-5 overflow-hidden hover:bg-gray-100",
  CardHStack:
    "bg-white shadow-md border border-gray-200 rounded-lg mb-5 overflow-hidden flex flex-row max-w-2xl hover:bg-gray-100",
};

interface CardSimpleProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
  href: string;
}

export function Card({ title, excerpt, coverImage: imageUrl, date, tags, href }: CardSimpleProps) {
  return (
    <Link href={href} className={Style.CardHStack}>
      <img className={Style.ImageHStack} src={imageUrl} alt="blog" />
      <div className="p-3">
        <div className={Style.Title}>{title}</div>
        <div className={Style.Description}> {excerpt}</div>
        <div className={Style.HStack}>
          <time className={Style.Time} dateTime="2020-03-16">
            {date}
          </time>
          {tags.map((tag, index) => (
            <div key={index} className={Style.Tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function Cards({ posts }: { posts: CardSimpleProps[] }) {
  return (
    <div className={Style.Holder2cols}>
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
    </div>
  );
}

export function CardSample() {
  const posts = [
    {
      title: "Reactでフロントエンドを実装してみた",
      excerpt:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      coverImage: "https://dummyimage.com/720x400",
      date: "2022-12-31",
      category: "フロントエンド",
      tags: ["React", "Next.js", "TypeScript"],
      href: "#",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      excerpt:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      coverImage: "https://dummyimage.com/720x400",
      date: "2022-12-31",
      category: "フロントエンド",
      tags: ["React", "Next.js", "TypeScript"],
      href: "#",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      excerpt:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      coverImage: "https://dummyimage.com/720x400",
      date: "2022-12-31",
      category: "フロントエンド",
      tags: ["React", "Next.js", "TypeScript"],
      href: "#",
    },
  ];

  return <Cards posts={posts} />;
}
