import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptocurrency",
  description: "Cryptocurrency investment hub page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
