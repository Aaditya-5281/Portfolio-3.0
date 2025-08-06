import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const title = `${DATA.name} - ${DATA.description}`;
const description = DATA.summary;
const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: DATA.name,
    locale: 'en_US',
    images: [
      {
        url: `${url}/me.png`,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/", sizes: "32x32" },
      { url: "/anime.png" },
    ],
    shortcut: "/",
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@aadityakumar26082004",
    images: [`${url}/me.png`],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${fontSans.variable}`}>
      <head>
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: DATA.name,
            url: url,
            image: "/me.png",
            jobTitle: DATA.work[0]?.title || "Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: DATA.work[0]?.company || "",
            },
            description: DATA.summary,
            skills: DATA.skills.join(", "),
          })}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}