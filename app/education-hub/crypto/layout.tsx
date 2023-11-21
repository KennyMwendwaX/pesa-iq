import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Articles",
  description: "Cryptocurrencies related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
