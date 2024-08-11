import type { Metadata } from "next";

// css
import "./globals.css";
import { Providers } from "./providers";

// fonts
import { roboto } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Lorem Ipsum",
  description: "Lorem Ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark-bg text-primary h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
