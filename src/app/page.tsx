import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Leaders } from "@/components/Leaders";
import { Message } from "@/components/Message";
import { Works } from "@/components/Works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leaders />
      <About />
      <Works />
      <Activities />
      <Gallery />
      <Message />
      <Contact />
    </>
  );
}
