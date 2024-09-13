import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Mega } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Jessica Arvizu UGC",
};

const lexend_mega = Lexend_Mega({
  weight: '700',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend_mega.className}`}
      >
        {children}
      </body>
    </html>
  );
}
