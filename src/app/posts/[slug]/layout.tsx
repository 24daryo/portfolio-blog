"use client";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるように
  });
  return <>{children}</>;
}
