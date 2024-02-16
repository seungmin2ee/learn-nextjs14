import "../styles/global.css";
import type { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies", // %s 이부분에 각 페이지의 메타데이터 title 값이 들어감
    default: "Next Movies", // 메타데이터가 없는 페이지에서 사용할 기본값
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
