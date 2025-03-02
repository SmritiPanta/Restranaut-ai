import { twMerge } from "tailwind-merge";
import type { ClassValue } from "tailwind-variants";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ANIMATION_DELAY } from "@/lib/siteConfig";

export type Feature = {
  title: string;
  description: string;
  icon?: React.ReactElement;
};

export type FeaturesSectionProps = {
  features: Array<Feature>;
  classes?: { root?: ClassValue };
};

export default function FeaturesSection({
  classes,
  features
}: FeaturesSectionProps) {
  return (
    <section
      id="/features"
      className={twMerge(
        "py-16 bg-background text-foreground scroll-mt-16",
        classes?.root
      )}>
      <Container className="text-center space-y-8">
        <div data-aos="fade-left">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Your brand, amplified. <br />
            Say goodbye to cookie-cutter apps.
          </h1>
          <p className="text-lg mt-2 text-muted-foreground">
            Enhance your brand with unique and innovative app solutions.
          </p>
        </div>

         <Button
          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
          data-aos="zoom-in">
          Explore all possibilities!
        </Button>
      </Container>

      <Container className="grid sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-start"
            data-aos="fade-right">
            <div className="mt-1 text-primary-foreground [&_svg]:size-10 inline-flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
