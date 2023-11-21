import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Hub",
  description: "Education hub page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
