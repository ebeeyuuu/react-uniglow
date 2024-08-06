import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@/context/userContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uniglow.vercel.app",
  description: "Published by Ean Yu - uniglow.vercel.app: the website that helps you decide the university for you. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
