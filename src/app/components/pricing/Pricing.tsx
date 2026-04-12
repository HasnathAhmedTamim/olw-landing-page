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
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Unlimited Sharing", included: false },
      { name: "Upload graphics & video in up to 4k", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: true },
      { name: "Create teams to collaborate on designs", included: true },
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="mt-18">
      <div className="flex flex-col items-center justify-center">
        <h2
          className="font-['DM_Sans',sans-serif] text-[30px] leading-[100%] tracking-[0%] text-center font-bold sm:text-[34px] lg:text-[40px]"
        >
          <span className="text-(--color-nav-text)">
            Airbnb Assistant
          </span>{" "}
          <span className="text-(--color-accent)">Pricing</span>
        </h2>
        <p
          className="mt-4 text-center text-[16px] leading-[100%] tracking-[0%] font-normal font-['DM_Sans',sans-serif] text-(--color-nav-text) sm:text-[18px] lg:text-[20px]"
        >
          Choose a plan that&apos;s right for you
        </p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <p
            className="text-[16px] leading-[100%] tracking-[0%] font-normal text-(--color-pay-text) font-['DM_Sans',sans-serif]"
          >
            Pay Monthly
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              aria-label="Toggle yearly billing"
              onChange={() => setIsYearly((s) => !s)}
            />
            <div
              className={`w-12 h-6 rounded-full border border-black/10 relative transition-colors duration-300 ${
                isYearly ? "bg-(--color-accent)" : "bg-(--color-switch-bg)"
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
          </label>
          <p
            className="text-[16px] leading-[100%] tracking-[0%] font-normal text-(--color-pay-text) font-['DM_Sans',sans-serif]"
          >
            Pay Yearly
          </p>

          <div className="absolute -right-45 -top-2.5 hidden items-end lg:flex">
            <Image
              src="/logos/arrow2.svg"
              width={92}
              height={56}
              alt="Save arrow"
              className="mb-1.5"
            />
            <span className="text-[16px] mb-5 font-medium underline text-(--color-accent)">
              Save 25%
            </span>
          </div>
        </div>

        <ul className="mt-11.5 grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-32">
          {PRICING.map((plan) => {
            const annualPrice = Math.round(plan.price * 12 * 0.75);
            return (
              <li
                key={plan.id}
                className={
                  "group flex flex-col rounded-[10px] py-10 px-6 border opacity-100 bg-(--color-white-background) border-(--color-service-border) hover:bg-(--color-accent) transition-colors duration-200"
                }
              >
                <p
                  className={
                    "font-bold text-[22px] leading-[100%] tracking-[0%] text-(--color-pay-text) group-hover:text-(--color-on-accent)"
                  }
                >
                  {plan.title}
                </p>
                <p
                  className={
                    "font-normal not-italic text-[16px] leading-[100%] tracking-[0%] text-(--color-description-text) group-hover:text-(--color-description-on-accent) mt-3"
                  }
                >
                  {plan.description}
                </p>
                <p className="mt-5 mb-6 flex items-center gap-3">
                  {isYearly ? (
                    <>
                      <span className="font-['Manrope',sans-serif] font-semibold text-[42px] leading-[100%] text-(--color-pay-text) group-hover:text-(--color-on-accent) sm:text-[56px]">
                        {"$" + annualPrice}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-light text-[16px] leading-[100%] text-(--color-subtext) group-hover:text-(--color-description-on-accent)">
                        /Year
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-['Manrope',sans-serif] font-semibold text-[42px] leading-[100%] text-(--color-pay-text) group-hover:text-(--color-on-accent) sm:text-[56px]">
                        {"$" + plan.price}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-light text-[16px] leading-[100%] text-(--color-subtext) group-hover:text-(--color-description-on-accent)">
                        /Month
                      </span>
                    </>
                  )}
                </p>
                <Button
                  type="start"
                  verticalPadding="py-0"
                  horizontalPadding="px-0 group-hover:bg-(--color-white-background) group-hover:border-transparent"
                >
                  <span className="text-[16px]">Get Started Now</span>
                </Button>
                <ul className="mt-10 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-4 text-[16px] leading-[100%]"
                    >
                      <div
                        className={`w-8 h-8 min-h-8 min-w-8 rounded-full flex items-center justify-center ${
                          feature.included ? "bg-[#FAC4D2]" : "bg-[#F7F8F9]"
                        }`}
                      >
                        <Image
                          src={
                            feature.included
                              ? "/logos/RightIcons.png"
                              : "/logos/CrossIcons.png"
                          }
                          width={16}
                          height={16}
                          alt={feature.included ? "Included" : "Not included"}
                        />
                      </div>
                      <span
                        className={`${feature.included ? "text-(--color-pay-text) group-hover:text-(--color-on-accent)" : "text-(--color-feature-disabled)"} font-['Manrope',sans-serif] font-medium text-[16px] leading-[100%] tracking-[0%]`}
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