"use client";

import "./globals.css";
import Header from "@/components/header";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // ページがマウントされた後に非同期でスクリプトを読み込む
    const script = document.createElement("script");
    script.src = "https://embed.zenn.studio/js/listen-embed-event.js";
    script.async = true;
    document.head.appendChild(script);

    // クリーンアップ関数
    return () => {
      // コンポーネントがアンマウントされるときにスクリプトを削除する
      document.head.removeChild(script);
    };
  }, []); // useEffectの第二引数は空の配列であることが一般的です
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head></head>
      <body className="h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-3xl px-6 py-6 sm:px-6 lg:px-8 bg-white">{children}</div>
        </main>
      </body>
    </html>
  );
}
