import Link from "next/link"
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Request for demo"
};

const pageData = {
  title: "Experience the Future of Restaurant Technology.",
  description:
    "Request a demo today and see the difference tailored technology can make for your restaurant chain."
};

function RequestForDemoForm() {
  return (
    <form className="mx-auto lg:ms-auto px-4 md:px-6 py-8 bg-background rounded-lg border shadow-lg z-1 w-full max-w-xl space-y-6 translate-y-[100px]">
      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            id="firstName"
            className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
            placeholder="e.g: John"
          />
          <label
            htmlFor="firstName"
            className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            First Name
            <sup className="text-destructive">*</sup>
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="lastName"
            className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
            placeholder="e.g: Doe"
          />
          <label
            htmlFor="lastName"
            className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Last Name
            <sup className="text-destructive">*</sup>
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
          placeholder="e.g: johndoe@gmail.com"
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Email Address
          <sup className="text-destructive">*</sup>
        </label>
      </div>

      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="relative">
          <input
            type="tel"
            id="phoneNumber"
            className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
            placeholder="e.g: (555) 555-1234"
          />
          <label
            htmlFor="phoneNumber"
            className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Phone Number
            <sup className="text-destructive">*</sup>
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="company"
            className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
            placeholder="e.g: Restronaut.AI"
          />
          <label
            htmlFor="company"
            className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Company
            <sup className="text-destructive">*</sup>
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type="number"
          id="quantity"
          className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
          placeholder="e.g: 10"
        />
        <label
          htmlFor="quantity"
          className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          # of Restaurant
          <sup className="text-destructive">*</sup>
        </label>
      </div>

      <div className="relative">
        <textarea
          type="number"
          id="details"
          className="block px-3 pb-3.5 pt-4 w-full text-sm text-foreground/90 bg-background rounded-lg border-0 ring ring-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary peer placeholder-background focus:placeholder-muted-foreground"
        />
        <label
          htmlFor="details"
          className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Details (Optional)
          <sup className="text-destructive">*</sup>
        </label>
      </div>

      <Button className="w-full rounded-full" size="xl">
        Request a Demo
      </Button>

      <div className="text-center">
        <span className="text-sm font-medium text-muted-foreground">
          By submitting this form you agree to our <Link href="#" className="hover:underline hover:text-primary">privacy policy.</Link>
        </span>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={pageData.title}
        description={pageData.description}
        gradientColors={["#FF758C", "#7A691E", "#311EFF", "#9B009B"]}
        rightContent={<RequestForDemoForm />}>
        <svg
          viewBox="0 0 1440 400"
          className="absolute inset-x-0 -bottom-1 -rotate-180 z-0 fill-muted">
          <path d="M1440 0L0 250L0 0L1440 0Z" />
        </svg>
      </HeroSection>

      <Footer
        classes={{
          root: "bg-muted max-md:pt-16",
          copyrightRoot: "bg-background",
          input: "bg-background"
        }}
      />
    </>
  );
}
