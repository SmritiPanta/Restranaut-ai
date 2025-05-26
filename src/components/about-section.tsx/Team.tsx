import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "tailwind-variants";

import { Container } from "@/components/Container";

function getExtension(src: string) {
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "svg",
    "tiff",
    "ico",
    "avif"
  ];

  const ext = src.split(".").pop()?.toLowerCase();
  if (!ext) return "other";
  if (imageExtensions.includes(ext)) return "image";

  return "other";
}

export type Team = {
  title: string;
  subtitle: string;
  description: string;

  asset: { src: string; alt?: string; [x: string]: unknown };
};

export type TeamProps = {
  teams: Array<Team>;
  classes?: { root?: ClassValue };
};

export default function TeamSection({ teams, classes }: TeamProps) {
  return (
    <section
      id="/teams"
      className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
      <Container className="bg-muted  flex justify-center gap-x-8 border lg:rounded-lg overflow-x-clip">
        {teams.map((team, idx) => (
          <div key={idx} className=" py-10 ">
            <div className="">
              <div className="max-w-[335px] shadow-2xl p-6 ">
                <div>
                  {getExtension(team.asset.src) === "image" && (
                    <img
                      className="rounded-lg border shadow-xs"
                      src={team.asset.src}
                      alt={team.asset.alt || "Team image"}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-medium mt-4 text-balance">
                  {team.title}
                </h3>

                <h3 className="text-lg text-[#EB4F48] font-bold mt-2 text-balance">
                  {team.subtitle}
                </h3>

                <p className="mt-4 pb-4 text-foreground/85 text-balance">
                  {team.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
