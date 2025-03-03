import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Logo from "@/assets/logo-mini.svg";
import { ClassValue } from "tailwind-variants";

export type AppLogoProps = {
  href?: string;
  hideText?: boolean;
  classes?: {
    root?: ClassValue;
    svg?: ClassValue;
    text?: ClassValue;
  };
};

export const AppLogo: React.FC<AppLogoProps> = ({
  href,
  classes,
  hideText
}) => {
  const Component = href ? Link : "div";
  return (
    <Component
      href={href as unknown}
      className={twMerge(
        "group inline-flex items-center gap-2 text-foreground transition-all",
        classes?.root
      )}>
      <Logo className={twMerge("w-12 h-auto", classes?.svg)} />
      {hideText ? null : (
        <span className={twMerge("font-essen mt-1", classes?.text)}>
          Restronaut.AI
        </span>
      )}
    </Component>
  );
};
