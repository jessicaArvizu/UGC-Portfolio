import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Mega } from "next/font/google"
import localFont from 'next/font/local'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Jessica Arvizu UGC",
};

const rocket_thunder = localFont({ 
  src: '../public/fonts/RocketThunder-Regular.otf',
  variable: '--font-Rocket'
})

const lexend_mega = Lexend_Mega({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-Lexend',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend_mega.variable} ${rocket_thunder.variable}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}