import Banner from "./components/banner/banner";
import FAQ from "./components/faq/FAQ";
import { GetStarted } from "./components/getStarted/getStarted";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Onboarding from "./components/onboarding/Onboarding";
import Partners from "./components/partners/partners";
import Pricing from "./components/pricing/Pricing";

import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";
import Tools from "./components/tools/Tools";

export default function LandingPage() {
  return (
    <section className="">
      <div className="">
        <Banner />
        <Partners></Partners>
        <Services />
        <Pricing />
        <Tools />
        <GetStarted /> 
        <Reviews />
        <FAQ />
      

      </div>
    </section>
  );
}