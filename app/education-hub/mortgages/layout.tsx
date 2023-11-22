import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgages and Housing Articles",
  description: "Mortgages and Housing related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
