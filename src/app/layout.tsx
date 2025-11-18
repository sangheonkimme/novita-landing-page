import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novita.app"),
  title: {
    default: "Novita | 당신의 모든 생각을 쉽고 아름답게 기록하세요",
    template: "%s | Novita",
  },
  description:
    "Novita는 로컬에 안전하게 저장되는 스마트 노트 앱으로 텍스트, 체크리스트, 사진까지 아름답게 정리할 수 있습니다.",
  keywords: [
    "Novita",
    "노비타",
    "노트 앱",
    "체크리스트",
    "로컬 메모",
    "오프라인 노트",
  ],
  openGraph: {
    title: "Novita | 당신의 모든 생각을 쉽고 아름답게 기록하세요",
    description:
      "학생과 직장인을 위한 간단하고 아름다운 로컬 노트 앱, Novita를 만나보세요.",
    url: "https://novita.app",
    siteName: "Novita",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novita | 당신의 모든 생각을 쉽고 아름답게 기록하세요",
    description:
      "텍스트부터 체크리스트, 사진까지 담아주는 스마트 로컬 노트 앱 Novita.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
