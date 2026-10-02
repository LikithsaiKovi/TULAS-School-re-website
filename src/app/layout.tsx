import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SectionThemeProvider } from "@/contexts/SectionThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tulas International School | Best Boarding School in Dehradun",
  description:
    "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12. Academic excellence, holistic development, and a nurturing environment.",
  keywords: [
    "boarding school Dehradun",
    "CBSE school Uttarakhand",
    "Tulas International School",
    "best boarding school India",
    "co-ed school Dehradun",
  ],
  openGraph: {
    title: "Tulas International School | Best Boarding School in Dehradun",
    description:
      "CBSE co-ed boarding school in Dehradun. Classes 4–12. Academic excellence & holistic development.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SectionThemeProvider>
            {children}
          </SectionThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
