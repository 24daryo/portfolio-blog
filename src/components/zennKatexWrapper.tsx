import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("A");
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるようにします
    console.log("B");
  });
  console.log("C");
  return <>{children}</>;
}
