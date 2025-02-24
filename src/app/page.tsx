"use client";

import AOS from "aos";
import * as React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdCenterFocusStrong } from "react-icons/md";
import {
  FaPaintRoller,
  FaArrowRightArrowLeft,
  FaMicrochip,
  FaToolbox,
  FaUsers,
  FaTimeline
} from "react-icons/fa6";

import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import StatsSection from "@/components/homepage/StatsSection";
import FeaturesSection, {
  type Feature
} from "@/components/homepage/FeaturesSection";

import ServicesSection, {
  type Service
} from "@/components/homepage/ServicesSection";
import FAQsSection, { type FAQ } from "@/components/homepage/FAQsSection";
import { Footer } from "@/components/Footer";
import CTASection from "@/components/homepage/CTASection";

const features: Array<Feature> = [
  {
    title: "Brand Centric",
    description:
      "Nothing is off your brand, every aspect of the application is tailored to your brand and strategy.",
    icon: <MdCenterFocusStrong />
  },
  {
    title: "Publish and edit",
    description:
      "Publish your new restaurant menus at any time you want according to your business need and stay ahead.",
    icon: <FaPaintRoller />
  },
  {
    title: "Analyze and optimize",
    description:
      "Analyze every transaction of your restaurant and make astronaut your most valuable asset with tools for AI powered statistics.",
    icon: <FaArrowRightArrowLeft />
  },
  {
    title: "Scale and Decide",
    description:
      "Decide your next business tactics according to the statistics as provided by astronaut and make the right approaches.",
    icon: <BsGraphUpArrow />
  }
];

const services: Array<Service> = [
  {
    title: "Automated Marketing",
    description:
      "By leveraging data-driven insights, our system creates personalized email campaigns, automated social media posts, and targeted promotions to keep your customers engaged.",
    icon: <FaToolbox />,
    asset: {
      src: "/videos/automated-marketing.mp4",
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
      src: "/videos/crm.mp4",
      alt: ""
    },
    actions: [{ label: "Learn More", href: "#" }]
  },
  {
    title: "Artificial Intelligence",
    description:
      "Our AI analyzes customer behavior, predicts trends, and personalizes promotions to boost engagement and revenue, streamlining marketing and menu optimization.",
    icon: <FaMicrochip />,
    asset: {
      src: "/videos/ai.mp4",
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
      src: "/videos/integration.mp4",
      alt: ""
    },
    actions: [{ label: "Learn More", href: "#" }]
  }
];

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

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Reaching Customers In the Digital Stratosphere..."
        description="An all-in-one platform built by restaurateurs, for restaurateurs, designed to streamline operations, enhance customer experiences, and drive business growth."
        gradientColors={["#FF758C", "#7A691E", "#311EFF", "#9B009B"]}
        actions={[
          { children: "Contact Us", size: "xl", className: "rounded-full" }
        ]}
      />
      <StatsSection
        stats={[
          { count: 3, unit: "+", label: "Years of experience" },
          { count: 84, unit: "K", label: "Customers worldwide" },
          { count: 100, unit: "+", label: "Available services and tech" }
        ]}
      />

      <FeaturesSection features={features} />
      <ServicesSection services={services} />
      <FAQsSection faqs={faqs} />

      <CTASection />

      <Footer classes={{ curve: "fill-background" }} />
    </>
  );
}
