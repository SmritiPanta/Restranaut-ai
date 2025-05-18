import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Navbar } from "@/components/Navbar";
import CTASection from "@/components/platformpage/CTASection";
import { Footer } from "@/components/platformpage/platformFooter";

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
              Reimagine dining with a solution designed to elevate every moment.
            </p>

            <p className="text-xl text-foreground/70 text-pretty px-8">
              From online ordering to marketing and analytics.
            </p>
          </div>
        }
        gradientColors={[
          "#D4D8FF",
          "#3ABEFF",
          "#1F4CFF",
          "#6B00B6"
        ]}></HeroSection>
      <CTASection />
      <Footer />
    </section>
  );
}
