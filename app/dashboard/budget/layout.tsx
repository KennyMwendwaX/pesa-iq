import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget",
  description: "Budget page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
