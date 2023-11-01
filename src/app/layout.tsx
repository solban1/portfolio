import type { Metadata } from "next";
import "./globals.css";
import { notoSansKR } from "@/font";
import { MenuNav } from "@/ui/menu";

export const metadata: Metadata = {
  title: {
    default: "solban1의 포트폴리오",
    template: "%s | solban1의 포트폴리오",
  },
  description: "Next.js를 이용하여 개발한 개인 포트폴리오 정리 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} bg-black subpixel-antialiased`}>
        <MenuNav />
        {children}
      </body>
    </html>
  );
}
