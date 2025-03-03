"use client";
import AOS from "aos";
import * as React from "react";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    AOS.init({ duration: 1000, mirror: false });
    return () => AOS.refreshHard();
  }, []);

  return (
        <ThemeProvider defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
  );
}
