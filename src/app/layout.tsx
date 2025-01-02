import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniro Hackathon Project 6",
  description: "Generated by Asif Enterprises --- Credits Muhammad Asif, Muhammad Yousuf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
