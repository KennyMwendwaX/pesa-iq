import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import TanstackProvider from "@/providers/TanstackProvider";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PesaIQ",
  description: "Financial Management, Analysis and Literacy website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TanstackProvider>
          <Navbar />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
