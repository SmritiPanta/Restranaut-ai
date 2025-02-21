import { Accordion } from "radix-ui";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa";
import type { ClassValue } from "tailwind-variants";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ANIMATION_DELAY } from "@/lib/siteConfig";

export type FAQ = {
  question: string;
  answer: string;
};

export type FAQsSectionProps = {
  faqs: Array<FAQ>;
  classes?: {
    root?: ClassValue;
  };
};

export default function FAQsSection({ classes, faqs }: FAQsSectionProps) {
  return (
    <section
      id="/faqs"
      className={twMerge("py-16 bg-background scroll-mt-16", classes?.root)}>
      <Container className="grid lg:grid-cols-3 gap-y-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg mt-2 text-muted-foreground">
            Got questions? We got answers! Here we address the most common
            inquiries regarding Restronaut.ai.
          </p>

          <Button className="mt-4">Ask a question</Button>
        </div>

        <Accordion.Root
          collapsible
          type="single"
          defaultValue="0"
          className="col-span-2 self-start lg:place-self-end flex flex-col w-full max-w-2xl gap-y-4">
          {faqs.map((faq, idx) => (
            <Accordion.Item
              key={idx}
              value={String(idx)}
              className="border bg-background px-6 py-4 rounded-lg shadow-sm transition-all w-full"
              data-aos="fade-left"
              data-aos-delay={(idx + 1) * ANIMATION_DELAY}>
              <Accordion.Trigger className="group flex items-center text-left gap-4 cursor-pointer w-full">
                <Accordion.Header className="transition-colors text-sm md:text-base font-medium text-foreground/80 hover:text-foreground group-aria-expanded:!text-primary">
                  {faq.question}
                </Accordion.Header>
                <FaChevronDown className="shrink-0 size-3 group-aria-expanded:-rotate-90 transition-all ms-auto text-muted-foreground" />
              </Accordion.Trigger>
              <Accordion.Content className="text-sm md:text-base font-medium text-muted-foreground mt-4 transition-[height] AccordionContent">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>

      <Container className="grid lg:grid-cols-3 gap-y-8 !hidden"></Container>
    </section>
  );
}
