import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import TanstackProvider from "@/providers/TanstackProvider";

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
      <body className={GeistSans.className}>
        <TanstackProvider>
          <Navbar />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
