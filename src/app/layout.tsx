import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "cascade sorting order sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
