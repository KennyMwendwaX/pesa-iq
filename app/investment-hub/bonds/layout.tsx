import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonds",
  description: "Analysing the treasury bonds",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
