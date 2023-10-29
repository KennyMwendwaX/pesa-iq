import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Hub",
  description: "Investment hub page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
