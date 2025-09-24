import { siteConfig } from "@/config/config";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const dynamic = "force-static"; // SSG page, client interactivity in sections

export default function Page() {
  return (
    <main>
      <Hero config={siteConfig.hero} socials={siteConfig.socials} />
      <About config={siteConfig.about} />
      <Projects config={siteConfig.projects} />
      <ContactForm config={siteConfig.contact} />
      <Footer />
    </main>
  );
}

