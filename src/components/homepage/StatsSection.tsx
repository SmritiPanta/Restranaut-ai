"use client";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "tailwind-variants";

import { Container } from "@/components/Container";
import { ANIMATION_DELAY } from "@/lib/siteConfig";

export type Stat = {
  count: number;
  unit?: string;
  label: string;
};

export type StatsSectionProps = {
  stats: Stat[];
  classes?: { root?: ClassValue };
};

export default function StatsSection({ classes, stats }: StatsSectionProps) {
  return (
    <section
      id="stats"
      className={twMerge("bg-muted text-foreground py-16", classes?.root)}>
      <Container className="grid lg:grid-cols-2 gap-12 xl:gap-20 xxl:gap-[100px]">
        <div className="flex items-center">
          <h2
            className="text-center text-4xl font-bold leading-tighter text-foreground lg:text-left lg:text-5xl"
            data-aos="fade-right">
            We earn trust by working efficiently
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3">
          {stats.map((data, idx) => (
            <div
              key={idx}
              className="relative px-0 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-10 after:w-1 after:rounded-md after:-translate-y-1/2 after:bg-primary first:pl-0 last:pr-0 last:after:hidden sm:px-10 sm:after:block"
              data-aos="zoom-out"
              data-aos-delay={(idx + 1) * ANIMATION_DELAY}>
              <div>
                <div className="mb-[5px] text-5xl font-bold leading-[1.14] text-foreground xl:text-[56px]">
                  <CountUp enableScrollSpy end={data.count} delay={idx + 1} />
                  {data.unit}
                </div>
                <span className="text-muted-foreground">{data.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
