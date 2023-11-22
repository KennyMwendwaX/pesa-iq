import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Articles",
  description: "Insurance related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
