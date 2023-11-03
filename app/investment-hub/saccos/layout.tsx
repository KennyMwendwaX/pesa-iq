import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SACCOS",
  description: "Top 20 best performing saccos in 2023",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
