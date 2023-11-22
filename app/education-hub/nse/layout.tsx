import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NSE Articles",
  description: "Nairobi Stock Exchange related articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
