import type { Metadata } from "next";
import { radioCanada } from "./ui/fonts";
import "./global.scss";
import Image from "next/image";



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
        <header>
          <div className="city">
            ▾ SD
          </div>

          <div className="title">
            EDM SHED
          </div>

          <div className="profile_pic_container">
            <Image 
              src="/profile-place-holder.png" 
              alt="Profile Picture" 
              width={35} 
              height={35}
              className="profile_pic"
              />
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
