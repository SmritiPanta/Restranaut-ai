import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/Button";
import ctaImage from "@/assets/cta-image.webp";
import { Container } from "@/components/Container";

export default function CTASection() {
  return (
    <section className="py-16 bg-background max-w-screen overflow-hidden">
      <Container>
        <div className="overflow-hidden relative bg-navy-900 bg-gradient-to-r from-[#1a1f35] to-[#212b4a] rounded-lg grid lg:grid-cols-2">
          {/** cta **/}
          <div className="p-8 md:px-12 bg-black/50 md:bg-transparent rounded-xl z-1 flex flex-col justify-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-10 text-pretty">
                Ready to reach new stratosphere with Restronaut?
        <div className="overflow-hidden relative bg-navy-900 bg-gradient-to-r from-[#1a1f35] to-[#212b4a] rounded-lg grid lg:grid-cols-2">
          {/** cta **/}
          <div className="p-8 md:px-12 bg-black/50 md:bg-transparent rounded-xl z-1 flex flex-col justify-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-10 text-pretty">
                Ready to reach new stratosphere with Restronaut?
              </h2>
              <p className="text-gray-200 md:text-gray-400 font-medium text-sm md:text-base tracking-tight">
              <p className="text-gray-200 md:text-gray-400 font-medium text-sm md:text-base tracking-tight">
                {" "}
                Our innovative solutions streamline operations, enhance customer
                engagement, and boost online visibility, helping you thrive in
                the digital age
              </p>

              <Button
                className="rounded-full max-md:w-full !bg-blue-500"
                className="rounded-full max-md:w-full !bg-blue-500"
                size="xl">
                <Link href="/">Request a Demo</Link>
                <Link href="/">Request a Demo</Link>
              </Button>
            </div>
          </div>

          {/** image **/}
          <div className="h-16 absolute -right-30 -top-30 lg:h-full lg:flex lg:items-center lg:justify-center lg:relative lg:right-auto lg:top-auto lg:py-8">
            <Image
              width={400}
              height={400}
              src={ctaImage}
              alt="Rocket launching into space"
              className="object-contain"
            />
          </div>

          {/** image **/}
          <div className="h-16 absolute -right-30 -top-30 lg:h-full lg:flex lg:items-center lg:justify-center lg:relative lg:right-auto lg:top-auto lg:py-8">
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
    </section>
  );
}
