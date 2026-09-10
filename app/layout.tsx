import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "NUMI — Build. Improve. Grow.",
  description:
    "NUMI helps businesses turn ideas into products — and makes existing businesses easier to run.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
