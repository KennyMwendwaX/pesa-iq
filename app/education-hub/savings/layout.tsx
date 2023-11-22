import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Savings Articles",
  description: "Financial Savings related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
