import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Archivo = localFont({
  src: "./fonts/Archivo-VariableFont_wdth,wght.ttf",
  variable: "--font-archivo-variable",
});

const LexendMega = localFont({
  src: "./fonts/LexendMega-Bold.ttf",
  variable: "--font-lexend-mega",
});

export const metadata: Metadata = {
  title: "Jessica Arvizu UGC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Archivo.variable} ${LexendMega.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
