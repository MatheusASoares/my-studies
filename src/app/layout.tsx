import "../styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studying",
  description: "Study Information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
