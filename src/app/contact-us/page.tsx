import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact Us"
};

function ContactForm() {
  return (
    <form className="self-start mx-auto lg:ms-auto px-4 md:px-6 py-8 bg-background rounded-lg border shadow-lg z-1 w-full max-w-xl space-y-6 translate-y-[50px]">
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
        Submit
      </Button>

      <div className="text-center">
        <span className="text-sm font-medium text-muted-foreground">
          By submitting this form you agree to our{" "}
          <Link href="#" className="hover:underline hover:text-primary">
            privacy policy.
          </Link>
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
        id="contact-us"
        title="Reach Out to Us:"
        description={
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <p className="mt-6 text-xl text-foreground/70 md:font-medium text-pretty">
              Reach out to our team to schedule a demo, ask questions about our
              product, or submit a request.
            </p>
            <div>
              <strong>General Questions:</strong>
              <p className="text-xl text-foreground/70 text-pretty">
                For all other questions, please contact us via email. We will
                get back to you within 48 hours.
              </p>
            </div>
          </div>
        }
        gradientColors={["#CE6CFF", "#945EDB", "#A56CCF", "#945EDB"]}
        rightContent={<ContactForm />}>
        <svg
          viewBox="0 0 1440 400"
          className="absolute inset-x-0 -bottom-0.5 -rotate-180 z-0 fill-muted">
          <path d="M1440 0L0 250L0 0L1440 0Z" />
        </svg>
      </HeroSection>

      <div className="py-4 bg-muted">
        <Container className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <LuMail className="size-4 shrink-0" />
            <a
              href="mailto:info@restronaut.ai"
              className="hover:text-primary hover:underline">
              info@restronaut.ai
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <LuPhone className="size-4 shrink-0" />
            <a
              href="630-272-5426"
              className="hover:text-primary hover:underline">
              630-272-5426
            </a>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <LuMapPin className="size-4 shrink-0" />
            <span>500 E SH 114, Suite 300, Southlake, TX 76092</span>
          </div>
        </Container>
      </div>
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
