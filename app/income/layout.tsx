import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income",
  description: "Income page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
