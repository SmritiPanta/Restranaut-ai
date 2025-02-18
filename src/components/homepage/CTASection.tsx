import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/Button";
import ctaImage from "@/assets/cta-image.webp";
import { Container } from "@/components/Container";

export default function CTASection() {
  return (
    <section className="py-16 bg-muted max-w-screen overflow-hidden">
      <Container>
        <div className="overflow-hidden relative bg-navy-900 bg-gradient-to-r from-[#1a1f35] to-[#212b4a] rounded-lg grid md:grid-cols-2">
          {/** cta **/}
          <div className="p-8 md:px-12 bg-black/50 md:bg-transparent rounded-xl z-1 flex flex-col justify-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-10 text-pretty">
                Ready to reach the stratosphere with Restronaut?
              </h2>
              <p className="text-gray-200 md:text-gray-400 font-medium text-sm md:text-base tracking-tight">
                Partner with Restronaut to elevate your restaurant's digital
                presence. Our innovative solutions streamline operations,
                enhance customer engagement, and boost online visibility,
                helping you thrive in the digital age.
              </p>

              <Button className="rounded-full max-md:w-full" size="xl">
                <Link href="/">Get Started</Link>
              </Button>
            </div>
          </div>

          {/** image **/}
          <div className="h-16 absolute -right-30 -top-30 md:h-full md:flex md:items-center md:justify-center md:relative md:right-auto md:top-auto md:py-8">
            <Image
              width={400}
              height={400}
              src={ctaImage}
              alt="Rocket launching into space"
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      <Container className="hidden">
        <div className="relative overflow-hidden bg-navy-900 bg-gradient-to-r from-[#1a1f35] to-[#212b4a] rounded-lg">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 px-8 py-8 bg-black/40">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-10 text-pretty">
                Ready to reach the stratosphere with Restronaut?
              </h2>
              <p className="text-gray-200 font-medium text-sm md:text-base tracking-tight text-pretty">
                Partner with Restronaut to elevate your restaurant's digital
                presence. Our innovative solutions streamline operations,
                enhance customer engagement, and boost online visibility,
                helping you thrive in the digital age.
              </p>

              <Button className="rounded-full" size="xl">
                <Link href="#">Get Started</Link>
              </Button>
            </div>
            <div className="h-16  absolute -right-30 top-30 -z-10">
              <Image
                width={400}
                height={400}
                src={ctaImage}
                alt="Rocket launching into space"
                className="object-contain aspect-square"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
