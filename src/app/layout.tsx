import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evan Ohemi | Frontend Developer",
  description:
    "Frontend Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
  openGraph: {
    title: "Evan Ohemi | Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, Next.js and modern web technologies.",
    type: "website",
  },
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Portfolio",
  ],
  creator: "Evan Ohemi",
  authors: [{ name: "Evan Ohemi" }],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
