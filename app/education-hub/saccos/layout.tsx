import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SACCO Articles",
  description: "SACCOs related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
