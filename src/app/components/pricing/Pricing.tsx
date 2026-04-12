"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../common/button";

type PricingPlan = {
  id: string;
  title: string;
  description: string;
  price: number;
  features: {
    name: string;
    included: boolean;
  }[];
};

const PRICING: PricingPlan[] = [
  {
    id: "freebie",
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [
      { name: "20,000+ PNG & SVG graphics", included: true },
      { name: "Access to 100M stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Unlimited Sharing", included: false },
      { name: "4K video uploads", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Design system access", included: false },
      { name: "Team collaboration", included: false },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [
      { name: "20,000+ PNG & SVG graphics", included: true },
      { name: "Access to 100M stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "4K video uploads", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Design system access", included: false },
      { name: "Team collaboration", included: false },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { name: "20,000+ PNG & SVG graphics", included: true },
      { name: "Access to 100M stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "4K video uploads", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Design system access", included: true },
      { name: "Team collaboration", included: true },
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-center text-[30px] font-bold sm:text-[34px] lg:text-[40px]">
          <span className="text-(--color-nav-text)">
            Airbnb Assistant
          </span>{" "}
          <span className="text-(--color-accent)">Pricing</span>
        </h2>

        <p className="mt-4 text-center text-[16px] text-(--color-nav-text) sm:text-[18px] lg:text-[20px]">
          Choose a plan that&apos;s right for you
        </p>

        {/* Toggle */}
        <div className="relative mt-8 flex items-center gap-4 sm:gap-6">

          <span className="text-[16px] text-(--color-pay-text)">
            Pay Monthly
          </span>

          {isYearly ? (
            <button
              type="button"
              role="switch"
              aria-checked="true"
              aria-label="Billing set to yearly"
              title="Switch billing to monthly"
              onClick={() => setIsYearly(false)}
              className="relative h-6 w-12 rounded-full bg-(--color-accent) transition-colors"
            >
              <span
                className="absolute top-0.5 left-0.5 h-5 w-5 translate-x-6 rounded-full bg-white transition-transform duration-300"
              />
            </button>
          ) : (
            <button
              type="button"
              role="switch"
              aria-checked="false"
              aria-label="Billing set to monthly"
              title="Switch billing to yearly"
              onClick={() => setIsYearly(true)}
              className="relative h-6 w-12 rounded-full bg-(--color-switch-bg) transition-colors"
            >
              <span
                className="absolute top-0.5 left-0.5 h-5 w-5 translate-x-0 rounded-full bg-white transition-transform duration-300"
              />
            </button>
          )}

          <span className="text-[16px] text-(--color-pay-text)">
            Pay Yearly
          </span>

          {/* Save badge */}
          <div className="absolute left-full top-1/2 ml-4 hidden -translate-y-1/2 whitespace-nowrap lg:flex items-end gap-1.5">
            <Image
              src="/save_arrow.svg"
              width={92}
              height={56}
              alt="Save arrow"
              className="h-14 w-23 object-contain"
            />
            <span className="pb-1 font-['DM_Sans',sans-serif] text-[18px] font-medium leading-[100%] tracking-[0%] text-(--color-accent)">
              Save 25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <ul className="mt-12 grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-20">
          {PRICING.map((plan) => {
            const annualPrice = Math.round(plan.price * 12 * 0.75);

            return (
              <li
                key={plan.id}
                className="
                  group flex flex-col rounded-xl border
                  border-(--color-service-border)
                  bg-(--color-white-background)
                  p-6
                  transition-all duration-300
                  hover:bg-(--color-accent)
                "
              >

                {/* Title */}
                <h3 className="text-[22px] font-bold group-hover:text-white">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[14px] text-(--color-description-text) group-hover:text-white/80">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 mb-6">
                  <span className="text-[42px] font-semibold group-hover:text-white">
                    ${isYearly ? annualPrice : plan.price}
                  </span>
                  <span className="text-[16px] text-(--color-subtext) group-hover:text-white/80">
                    {isYearly ? "/Year" : "/Month"}
                  </span>
                </div>

                {/* Button */}
                <Button variant="start">
                  Get Started Now
                </Button>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">

                      <div
                        className={`
                          w-8 h-8 rounded-full flex items-center justify-center
                          ${feature.included ? "bg-pink-200" : "bg-gray-100"}
                        `}
                      >
                        <Image
                          src={
                            feature.included
                              ? "/logos/RightIcons.png"
                              : "/logos/CrossIcons.png"
                          }
                          width={16}
                          height={16}
                          alt="icon"
                          className="h-auto w-auto"
                        />
                      </div>

                      <span
                        className={
                          feature.included
                            ? "group-hover:text-white"
                            : "text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;