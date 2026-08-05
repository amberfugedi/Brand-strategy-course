import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "@fontsource/newsreader/500-italic.css";
import { AuthProvider } from "@/lib/auth/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Your Marketing Foundation",
  description:
    "Three layers. Seven foundations. One strategic plan that's actually yours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
