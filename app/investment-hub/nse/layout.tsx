import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nairobi Stock Exchange",
  description: "Nairobi Stock Exchange investment hub page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
