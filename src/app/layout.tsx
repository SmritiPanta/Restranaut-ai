import "@/assets/global.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import { twJoin } from "tailwind-merge";
import { ThemeProvider } from "next-themes";
import { SITE_CONFIG } from "@/lib/siteConfig";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Provider from "./providers";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`
  },
  description: SITE_CONFIG.description
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: SITE_CONFIG.colors.primary.light
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: SITE_CONFIG.colors.primary.dark
    }
  ]
};

const interFont = Inter({
  subsets: ["latin"]
});

const essenFont = localFont({
  src: "../assets/essen-regular.ttf",
  variable: "--font-essen"
});

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style id="theme-color">{generateCSS()}</style>
      </head>
      <body className={twJoin(essenFont.variable, interFont.className)}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Provider>{props.children}</Provider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

function generateCSS() {
  // prettier-ignore
  let lightVars = "", darkVars = "";

  for (const [key, value] of Object.entries(SITE_CONFIG.colors)) {
    const cssVar = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    lightVars += `${cssVar}:${value.light};`;
    darkVars += `${cssVar}:${value.dark};`;
  }
  return `:root{${lightVars}}.dark{${darkVars}}`;
}
