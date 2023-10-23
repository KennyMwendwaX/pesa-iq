import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expenses",
  description: "Expenses page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
