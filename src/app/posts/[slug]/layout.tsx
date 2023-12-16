"use client";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるように
  });
  return <div className="mx-auto max-w-4xl px-6 py-6 sm:px-6 lg:px-8 bg-white">{children}</div>;
}
