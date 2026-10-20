import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "@fontsource/newsreader/500-italic.css";
import { AUDIT } from "@/lib/audit";
import { AuthProvider } from "@/lib/auth/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Your Marketing Foundation",
  description:
    "Three layers. Seven foundations. One strategic plan that’s actually yours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* An unlocked build that looks exactly like the real one is
            the thing most likely to mislead a review, so it says so
            on every page and prints on every page too. */}
        {AUDIT ? (
          <div className="sticky top-0 z-[100] bg-aubergine px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-chrome text-cream">
            Audit mode · every module open · not the buyer’s view
          </div>
        ) : null}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
