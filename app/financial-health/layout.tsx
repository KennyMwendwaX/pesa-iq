import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Health",
  description: "Analysis and reports on financial health",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
