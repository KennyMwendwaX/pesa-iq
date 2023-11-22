import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgages and Articles",
  description: "Mortgages and related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
