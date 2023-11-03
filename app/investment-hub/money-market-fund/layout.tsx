import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Market Fund",
  description: "Top 15 best performing Money Market Fund in 2023",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
