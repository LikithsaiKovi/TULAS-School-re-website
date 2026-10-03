import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tula’s International School | Dehradun",
  description:
    "Tula’s International School is a co-educational CBSE school in Dehradun, welcoming students from Class IV to XII for boarding and day school.",
  openGraph: {
    title: "Tula’s International School | Dehradun",
    description: "A co-educational CBSE school in Dehradun for Classes IV–XII.",
    url: "https://tis.edu.in",
    siteName: "Tulas International School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <MotionConfig reducedMotion="user">
            <SiteChrome />
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
