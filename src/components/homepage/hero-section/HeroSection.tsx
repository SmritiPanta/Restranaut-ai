"use client";
import Link from "next/link";
import * as React from "react";
import { twJoin } from "tailwind-merge";
import { GradientScene } from "./GradientScene";
import { Container } from "@/components/Container";
import { Button, type ButtonProps } from "@/components/Button";

const gradientColors = ["#FF758C", "#7A691E", "#311EFF", "#9B009B"];

type HeroSectionProps = {
  title: string;
  description: string | React.ReactElement;

  gradientColors: string[];
  actions?: Array<ButtonProps & { href?: string }>;
  children?: React.ReactNode;
  rightContent?: React.ReactElement;
};

export default function HeroSection({
  title,
  description,
  actions,
  gradientColors,
  children,
  rightContent
}: HeroSectionProps) {
  const [enableBgEffect, setEnableBgEffect] = React.useState(true);

  React.useEffect(() => {
    /** eslint-disable-next-line eqeqeq */
    setEnableBgEffect(localStorage.getItem("bg_effect") != "false");
  }, []);

  return (
    <section
      id="/"
      className={twJoin(
        "relative",
        !enableBgEffect && "bg-background text-foreground"
      )}>
      <Container className="grid lg:grid-cols-2 pt-32 pb-16 sm:pt-48 md:py-52 gap-8 lg:gap-16 z-10">
        <button
          className="size-48 absolute right-0 top-16 opacity-0 z-1000"
          onClick={() => {
            setEnableBgEffect((v) => {
              localStorage.setItem("bg_effect", JSON.stringify(!v));
              return !v;
            });
          }}
        />

        <div className={twJoin(enableBgEffect && "dark")}>
          <h1
            className="text-5xl font-medium tracking-tight text-foreground sm:text-7xl text-balance"
            data-aos="fade-right">
            {title}
          </h1>

          {typeof description === "string" ? (
            <p
              className="mt-6 text-xl text-foreground/70 md:font-medium text-pretty"
              data-aos="fade-right"
              data-aos-delay="200">
              {description}
            </p>
          ) : (
            description
          )}

          {actions?.length >= 0 && (
            <div
              className="flex flex-col md:flex-row py-8 gap-4"
              data-aos="fade-right"
              data-aos-delay="300">
              {actions.map(({ href = "#", children, ...restProps }, idx) => (
                <Button key={idx} {...restProps} asChild>
                  <Link href={href}>{children}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {rightContent}
      </Container>

      {enableBgEffect && <GradientScene colors={gradientColors} />}
      {children}
    </section>
  );
}
