import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Analytics and reports on finances page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
