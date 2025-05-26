"use client";
import * as React from "react";
import { BiBookAlt } from "react-icons/bi";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Navbar } from "@/components/Navbar";
import CTASection from "@/components/platformpage/CTASection";
import { Footer } from "@/components/platformpage/platformFooter";
import InstaCard from "@/components/socials/InstaCard";
import { Container } from "@/components/Container";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/Button";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
export default function PlatformPage() {
  return (
    <section>
      <Navbar />
      <HeroSection
        id="platform-page"
        title=""
        description={
          <div
            className="space-y-4 w-full"
            data-aos="fade-right"
            data-aos-delay="200">
            <p className=" text-5xl w-[900px] px-8 md:font-bold text-pretty">
              Stay updated <br />
              on all our socials...
            </p>
          </div>
        }
        gradientColors={[
          "#D4D8FF",
          "#3ABEFF",
          "#1F4CFF",
          "#6B00B6"
        ]}></HeroSection>

      <section>
        <Container>
          <div className=" flex justify-between items-center">
            <div className=" flex gap-4 items-center py-8">
              <FaInstagram size="30" />
              <h1 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
                Instagram: @restronaut.ai
              </h1>
            </div>

            <Button className="rounded-full max-md:w-full" size="lg">
              <Link href="/">follow</Link>
            </Button>
          </div>

          <div>
            <div className=" space-y-4  mt-4 flex gap-6">
              <InstaCard
                title="Your brand, amplified. Say goodbye to cookie-cutter apps."
                description="Enhance your brand with unique and innovative app solutions."
                bgColor="bg-white"
                textColor="text-black"
                footer="Taking restronaut to new heights"
                logoSrc="/logo-mini.svg"
                graphicSrc="/coin.png"
              />

              <InstaCard
                title="Reaching Customers  In the Digital Stratosphere"
                description="All-in-one platform for Restaurateur by  Restaurateurs."
                bgColor=" bg-gradient-to-br from-red-600 to-pink-500"
                textColor="text-white"
                footer="Taking restronaut to new heights"
                logoSrc="/logo-mini.svg"
                contentClassName="mt-24  "
                textSizeClassName="text-5xl"
              />
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
      <Footer />
    </section>
  );
}
