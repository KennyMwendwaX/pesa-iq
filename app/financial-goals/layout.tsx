import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Goals",
  description: "Track your financial goals",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
