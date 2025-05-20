"use client";
import * as React from "react";
import { BiBookAlt } from "react-icons/bi";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Navbar } from "@/components/Navbar";
import CTASection from "@/components/platformpage/CTASection";
import { Footer } from "@/components/platformpage/platformFooter";
import ServicesSection, {
  Service
} from "@/components/platformpage/ServicesSection";
import { FaMicrochip, FaToolbox, FaUsers } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";

const services: Array<Service> = [
  {
    title: "Transform your brand",
    description:
      "Whether it’s streamlining your operations, connecting with your audience, or enhancing your digital presence, our solutions are designed to help your brand thrive. ",
    icon: <BiBookAlt />,
    asset: {
      src: "/transform.png",
      alt: ""
    }
  },
  {
    title: "Free Yourself with AI Integration",
    description:
      "Our AI analyzes customer behavior, predicts trends, and personalizes promotions to boost engagement and revenue, streamlining marketing and menu optimization.",
    icon: <FaUsers />,
    asset: {
      src: "/AI.png",
      alt: ""
    }
  },
  {
    title: "Mobile App Development",
    description:
      "With intuitive features and seamless integration, we help you connect with your customers like never before—making your restaurant stand out in the digital age with our cutting-edge apps.",
    icon: <FaMicrochip />,
    asset: {
      src: "/mobileapp.png",
      alt: ""
    }
  },
  {
    title: "Online Delivery Service Partners",
    description:
      "Streamline your restaurant’s online orders with our platform, seamlessly integrated with top Delivery Service Providers (DSPs) for effortless ordering and smooth delivery operations.",
    icon: <FaTimeline />,
    asset: {
      src: "/onlineDelivery.png",
      alt: ""
    },
    actions: [{ label: "Learn More", href: "#" }]
  },
  {
    title: "Automated Marketing",
    description:
      "By leveraging data-driven insights, our system creates personalized email campaigns, automated social media posts, and targeted promotions to keep your customers engaged.",
    icon: <FaToolbox />,
    asset: {
      src: "/automated.png",
      alt: ""
    },
    points: [],
    actions: [{ label: "Learn More", href: "#" }]
  },
  {
    title: "Customer Relationship Management",
    description:
      "Our platform helps you track customer preferences, manage reservations, and create personalized experiences that keep diners coming back.",
    icon: <FaUsers />,
    asset: {
      src: "/customer.png",
      alt: ""
    },
    actions: [{ label: "Learn More", href: "#" }]
  },

  {
    title: "Integrations",
    description:
      "Integrate essential tools to streamline operations and elevate customer experience. Connect with POS systems for effortless order and inventory management, and payment gateways for secure transactions.",
    icon: <FaTimeline />,
    asset: {
      src: "/integration.png",
      alt: ""
    },
    actions: [{ label: "Learn More", href: "#" }]
  }
];

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
      <ServicesSection services={services} />
      <CTASection />
      <Footer />
    </section>
  );
}
