import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import { getServerSession } from "next-auth";
import SessionProvider from "@/providers/SessionProvider";
import TanstackProvider from "@/providers/TanstackProvider";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "PesaIQ",
  description: "Financial Management, Analysis and Literacy website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <SessionProvider session={session}>
          <TanstackProvider>
            <Layout>{children}</Layout>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
