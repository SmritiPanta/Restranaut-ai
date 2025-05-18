import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/Button";
import ctaImage from "@/assets/cta-image.webp";
import { Container } from "@/components/Container";

export default function CTASection() {
  return (
    <section className="py-16 bg-background max-w-screen overflow-hidden">
      <Container>
        <div className="">
          {/** image **/}
          <div className="h-16 absolute -right-30 -top-30 lg:h-full lg:flex lg:items-center lg:justify-center lg:relative lg:right-auto lg:top-auto lg:py-8">
            <Image
              width={1200}
              height={200}
              src={ctaImage}
              alt="Rocket launching into space"
              className="object-contain"
            />
            <div
              className="space-y-8  text-center absolute"
              data-aos="fade-left">
              <h2 className="text-2xl   md:text-4xl font-bold text-white leading-10 text-pretty">
                Ready to reach new stratosphere
                <br />
                with Restronaut?
              </h2>

              <p className="text-gray-200 flex justify-center md:text-gray-400 font-medium text-sm md:text-base tracking-tight">
                Our innovative solutions streamline operations, enhance customer
                <br />
                engagement, and boost online visibility, helping you thrive in
                the digital age.
              </p>

              <Button
                className="rounded-full max-md:w-full bg-blue-500 "
                size="xl">
                <Link href="/" className=" text-white">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
