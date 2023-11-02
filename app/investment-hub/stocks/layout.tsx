import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stocks",
  description: "Real time stocks data",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
