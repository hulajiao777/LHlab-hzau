import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘海组资源环境信息工程系网站",
  description: "华中农业大学资源环境信息工程系网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <meta name="referrer" content="never" />
      <body
      >
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
