import MissionSection from "@/components/about-section.tsx/MisiisonSection";
import TeamSection, { Team } from "@/components/about-section.tsx/Team";
import { Footer } from "@/components/Footer";
import CTASection from "@/components/platformpage/CTASection";
import FAQsSection, { type FAQ } from "@/components/homepage/FAQsSection";

import HeroSection from "@/components/homepage/hero-section/HeroSection";

import { Navbar } from "@/components/Navbar";

const faqs: Array<FAQ> = [
  {
    question:
      "How can Restronaut help my restaurant thrive in the digital space?",
    answer:
      "Restronaut empowers restaurants with cutting-edge digital tools, helping you streamline operations, increase efficiency, and attract more customers."
  },
  {
    question:
      "What kind of digital tools does Restronaut provide for restaurants?",
    answer:
      "Restronaut offers tools for online ordering, reservation management, and customer engagement analytics."
  },
  {
    question: "How can Restronaut improve my restaurant's customer engagement?",
    answer:
      "With personalized marketing and engagement tools, Restronaut helps you connect with your customers on a deeper level."
  },
  {
    question: "Is Restronaut suitable for small or independent restaurants?",
    answer:
      "Yes, Restronaut is designed to cater to businesses of all sizes, including small and independent restaurants."
  },
  {
    question: "How can Restronaut increase my restaurant's online visibility?",
    answer:
      "Through SEO optimization, social media integrations, and targeted advertising tools."
  },
  {
    question:
      "What are the key features of Restronaut that can help restaurants improve their online presence?",
    answer:
      "Key features include menu digitization, online ordering systems, and customer feedback integration."
  }
];

const teams: Array<Team> = [
  {
    asset: {
      src: "CEO.png",
      alt: ""
    },
    title: "Abraham Khan",
    subtitle: "Co-Founder & CEO",
    description:
      "With a sharp focus on technology leadership, Biplab Karki ensures Restronaut’s systems are robust, scalable, and future-ready. As CTO, he manages day-to-day technical operations, oversees the development team, and drives innovation to deliver seamless solutions for restaurants worldwide."
  },

  {
    asset: {
      src: "CEO.png",
      alt: ""
    },
    title: "Prashant Purie",
    subtitle: "Co-Founder & COO",
    description:
      "Driven by a passion for product innovation, Prashant leverages his master’s degree in computer science to manage timelines and cross-functional teams effectively. His forward-thinking approach ensures that Restronaut stays ahead of the curve, addressing the needs of tomorrow’s restaurants today."
  },

  {
    asset: {
      src: "/CEO.png",
      alt: ""
    },
    title: "Biplab Karki",
    subtitle: "CTO",
    description:
      "With a sharp focus on technology leadership, Biplab Karki ensures Restronaut’s systems are robust, scalable, and future-ready. As CTO, he manages day-to-day technical operations, oversees the development team, and drives innovation to deliver seamless solutions for restaurants worldwide."
  }
];

export default function AboutPage() {
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
              Get to Know Us: <br />
              Empowering Connections,One
              <br /> Innovation at a Time
            </p>
          </div>
        }
        gradientColors={[
          "#FF5A3D",
          "#E7402E",
          "#D12B2B",
          "#9F2F3F",
          "#7F7E94"
        ]}></HeroSection>
      <MissionSection />

      <CTASection />

      <TeamSection teams={teams} />

      <FAQsSection faqs={faqs} />
      <Footer />
    </section>
  );
}
