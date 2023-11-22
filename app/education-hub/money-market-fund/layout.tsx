import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Market Fund Articles",
  description: "Money Market Fund related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
