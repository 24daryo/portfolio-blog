"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
  image: string;
  href: string;
  height: string;
  left: string;
  top: string;
}

export function Card({ title, image, href, height, left, top, index }: CardSimpleProps & { index: number }) {
  const cardStyle: React.CSSProperties = {
    opacity: 1,
    position: "absolute",
    left: left,
    top: top,
  };

  const rand = 90 * Math.random() + 50;

  return (
    <div style={cardStyle}>
      <motion.div
        initial={{ opacity: 0, x: -rand }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.1 + 1 }}
      >
        <div
          className="relative max-w-[180px]  md:max-w-[280px] overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={image} alt={title} className="max-h-44" />
          <Link href={href}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
export function ScatterGallary({ posts }: { posts: CardSimpleProps[] }) {
  return (
    <div className="relative h-[42rem] bg-white overflow-clip">
      <div className="absolute z-index-0 flex min-h-screen w-full items-center justify-center">
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin duration-1000">
          <div className="h-32 w-32 rounded-full bg-gray-200"></div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-x-8 gap-y-8">
          <h1 className="text-gray-200 text-9xl font-sans font-bold">Coding</h1>
          <h1 className="text-gray-200 text-9xl font-sans font-bold">Music</h1>
          <h1 className="text-gray-200 text-9xl font-sans font-bold">Game</h1>
        </div>
      </motion.div>

      {posts.map((post, index) => (
        <Card key={index} index={index} {...post} />
      ))}
    </div>
  );
}

export function ScatterGallarySample() {
  const posts = [
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://www.godisageek.com/wp-content/uploads/FF7R-Thumb-1.jpg",
      href: "#",
      left: "20%",
      top: "80%",
      height: "120px",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image:
        "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/06/10/f4fe420a/ff7_remake_header.jpg",
      href: "#",
      left: "50%",
      top: "70%",
      height: "140px",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png",
      href: "#",
      left: "5%",
      top: "50%",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image:
        "https://assetsio.reedpopcdn.com/final-fantasy-7-rebirth-(38).png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      href: "#",
      left: "30%",
      top: "40%",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://dummyimage.com/720x400",
      href: "#",
      left: "65%",
      top: "50%",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://dummyimage.com/720x400",
      href: "#",
      left: "68%",
      top: "10%",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://dummyimage.com/720x400",
      href: "#",
      left: "40%",
      top: "2%",
    },
    {
      title: "Reactでフロントエンドを実装してみた",
      image: "https://dummyimage.com/720x400",
      href: "#",
      left: "3%",
      top: "3%",
    },
  ];
  const sortedPosts = posts.sort((a, b) => parseFloat(a.top) - parseFloat(b.top));

  return <ScatterGallary posts={posts} />;
}
