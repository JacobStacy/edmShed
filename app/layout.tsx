import type { Metadata } from "next";
import { radioCanada } from "./ui/fonts";
import "./global.scss";
import { TopNav } from "./ui/TopNav";
import { BottomNav } from "./ui/BottomNav";



export const metadata: Metadata = {
  title: "EDM SHED",
  description: "Find all your favorite artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={radioCanada.className}>
        <TopNav/>
        <main>
          {children}
        </main>
        <BottomNav/>
      </body>
    </html>
  );
}
