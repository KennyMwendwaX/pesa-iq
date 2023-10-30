import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

// Create a client
const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
