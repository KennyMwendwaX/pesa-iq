import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forex Articles",
  description: "Forex trading related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
