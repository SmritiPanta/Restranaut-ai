import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/Carousel";

import client from "@/assets/client.webp";
import logo from "@/assets/piccadilly_logo.webp";

const testimonials = [
  {
    quote:
      "This platform has revolutionized how we manage Picadilly Restaurant. From seamless integrations with Uber Eats and OpenTable to powerful analytics, it streamlines our operations and lets us focus on delivering exceptional dining experiences.",
    name: "John Peterson",
    position: "CEO, Picadilly Restaurant",
    image: client,
    logo: logo
  },
  {
    quote:
      "This platform has revolutionized how we manage Picadilly Restaurant. From seamless integrations with Uber Eats and OpenTable to powerful analytics, it streamlines our operations and lets us focus on delivering exceptional dining experiences.",
    name: "John Peterson",
    position: "CEO, Picadilly Restaurant",
    image: client,
    logo: logo
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background text-foreground scroll-mt-16">
      <Container>
        <div data-aos="fade-left">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Trusted by Businesses,
            <br />
            Backed by Results
          </h1>
          <p className="text-lg mt-2 text-muted-foreground">
            Every words out of our deep-valued clients are the reason we stand
            out from the crowd.
          </p>
        </div>
      </Container>

      <Container className="relative mt-8" asChild>
        <Carousel className="w-full" plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent className="w-full">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={idx} className="grid md:grid-cols-2 gap-8">
                <div className="max-md:order-1">
                  <blockquote className="text-xl font-medium leading-7 text-pretty">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <div className="mt-4">
                    <div className="text-xl text-foreground/85 font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-base font-medium text-muted-foreground">
                      {testimonial.position}
                    </div>

                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.name}'s company logo`}
                      width={150}
                      height={50}
                      className="mt-6"
                    />
                  </div>
                </div>

                <div className="relative overflow-hidden flex md:justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={310}
                    height={375}
                    className="object-cover object-center rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center py-8 gap-4">
            <CarouselPrevious className="relative translate-0 inset-0 w-10 h-10" />
            <CarouselNext className="relative translate-0 inset-0 w-10 h-10 " />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
