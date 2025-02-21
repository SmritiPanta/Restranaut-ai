"use client";
import * as React from "react";
import { twJoin } from "tailwind-merge";
import { Button } from "@/components/Button";
import { GradientScene } from "./GradientScene";
import { Container } from "@/components/Container";

const gradientColors = ["#FF758C", "#7A691E", "#311EFF", "#000"];

export default function HeroSection() {
  const [enableBgEffect, setEnableBgEffect] = React.useState(true);

  React.useEffect(() => {
    /** eslint-disable-next-line eqeqeq */
    setEnableBgEffect(localStorage.getItem("bg_effect") != "false");
  }, []);

  // React.useEffect(() => {
  //   setEnableBgEffect(true);
  // }, []);

  return (
    <section
      id="/"
      className={twJoin(
        "relative",
        !enableBgEffect && "bg-background text-foreground"
      )}>
      <Container
        className={twJoin(
          "grid lg:grid-cols-2 pt-32 pb-16 sm:pt-48 md:py-52 gap-8 lg:gap-16 z-10",
          enableBgEffect && "dark"
        )}>
        <button
          className="size-48 absolute right-0 top-16 opacity-0 z-1000"
          onClick={() => {
            setEnableBgEffect((v) => {
              localStorage.setItem("bg_effect", JSON.stringify(!v));
              return !v;
            });
          }}
        />

        <div>
          <h1
            className="text-5xl font-medium tracking-tight text-foreground sm:text-7xl text-balance"
            data-aos="fade-right">
            Reaching Customers In the Digital Stratosphere...
          </h1>

          <p
            className="mt-6 text-xl text-muted-foreground md:font-medium text-pretty"
            data-aos="fade-right"
            data-aos-delay="200">
            An all-in-one platform built by restaurateurs, for restaurateurs,
            designed to streamline operations, enhance customer experiences, and
            drive business growth.
          </p>

          <div
            className="flex flex-col md:flex-row py-8 gap-4"
            data-aos="fade-right"
            data-aos-delay="300">
            <Button size="xl" variant="inverted">
              Learn More
            </Button>
            <Button size="xl" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center"></div>
      </Container>

      {enableBgEffect && <GradientScene colors={gradientColors} />}

      <svg
        viewBox="0 0 1600 94"
        className="absolute inset-x-0 bottom-0 fill-muted">
        <path d="M1600 93.9999V0.180908C1600 0.180908 1245.36 93.2252 828.666 93.9999H1600ZM818.216 93.9999H0V0.180908C0 0.180908 391 92.5603 814 93.9888C815.406 93.9936 816.811 93.9973 818.216 93.9999Z" />
      </svg>
    </section>
  );
}
