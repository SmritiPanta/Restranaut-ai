import { Container } from "@/components/Container";
export default function MissionSection() {
  return (
    <section className="py-8">
      <Container className="grid lg:grid-cols-2 gap-y-8 ">
        <div className="max-w-[490px]">
          <h2 className="text-4xl mt-2 lg:text-5xl font-bold lg:tracking-tight">
            Our Mission In Action <br /> The Purpose Behind it All
          </h2>
        </div>
        <div className="max-w-[529px]">
          <p className="text-lg mt-2 text-muted-foreground">
            At Restronaut.ai, we are dedicated to revolutionizing the way
            restaurateurs connect with their customers by transforming guest
            engagement and loyalty strategies.
            <br /> <br />
            Our innovative, data-driven solutions empower businesses to
            understand their customers on a deeper level, enabling personalized
            experiences that drive meaningful connections.
            <br /> <br />
            We believe that building strong, lasting relationships is the
            cornerstone of sustainable growth, and our mission is to provide the
            tools and insights that make this possible through continuous
            innovation.
          </p>
        </div>
      </Container>
    </section>
  );
}
