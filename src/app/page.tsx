import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Onboarding from "./components/onboarding/Onboarding";

import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";
import Tools from "./components/tools/Tools";

export default function LandingPage() {
  return (
    <section className="">
      <div className="">

        <Services />
        <Tools />

        {/* <Hero />
        <Pricing />
     
        <Onboarding />
        <Reviews />
        <FAQ /> */}

      </div>
    </section>
  );
}