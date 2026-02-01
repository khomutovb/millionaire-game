import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Who wants to be a millionaire?",
  description:
    'A quiz game inspired by "Who Wants to Be a Millionaire?", built with Next.js and TypeScript.',
  openGraph: {
    title: "Who wants to be a millionaire?",
    description:
      'A quiz game inspired by "Who Wants to Be a Millionaire?", built with Next.js and TypeScript.',
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Who wants to be a millionaire? — quiz game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Who wants to be a millionaire?",
    description:
      'A quiz game inspired by "Who Wants to Be a Millionaire?", built with Next.js and TypeScript.',
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
