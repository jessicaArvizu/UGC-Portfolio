import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Jessica Arvizu UGC",
};

const rocket_thunder = localFont({ src: '../public/fonts/RocketThunder-Regular.otf'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rocket_thunder.className}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
