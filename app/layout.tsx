import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import TanstackProvider from "@/providers/TanstackProvider";
import Layout from "@/components/Layout";

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
          <Layout>{children}</Layout>
        </TanstackProvider>
      </body>
    </html>
  );
}
