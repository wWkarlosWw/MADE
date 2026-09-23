import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import SplitCta from "@/components/SplitCta";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhatWeDo />
        <Services />
        <Projects />
        <Gallery />
        <SplitCta />
        <Register />
      </main>
      <Footer />
      <FloatingCta />
    </MotionConfig>
  );
}
