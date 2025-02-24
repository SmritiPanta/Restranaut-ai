"use client";
import AOS from "aos";
import * as React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    AOS.init({ duration: 1000, mirror: false });
  }, []);

  return <>{children}</>;
}
