import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Loan Articles",
  description: "Financial Loan related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
