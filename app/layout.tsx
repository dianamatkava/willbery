import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Signum Fatum",
  description: "Signum Fatum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark-bg text-primary h-screen`}>
        {children}
      </body>
    </html>
  );
}
