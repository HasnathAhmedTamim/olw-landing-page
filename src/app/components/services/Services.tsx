import React from "react";
import Image from "next/image";
import Button from "../common/button";


type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "property-listings",
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-1.svg",
  },
  {
    id: "customer-bookings",
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-2.svg",
  },
  {
    id: "house-cleaning",
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-3.svg",
  },
  {
    id: "guest-reviews",
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-4.svg",
  },
  {
    id: "expenses",
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-5.svg",
  },
  {
    id: "guest-support",
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/service-6.svg",
  },
];

export const Services: React.FC = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="mt-14 px-25 flex flex-col items-center"
    >
      <h1 id="services-heading" className="text-[32px] font-bold">
        <span style={{ color: "var(--color-heading-black)" }}>Our </span>
        <span style={{ color: "var(--color-accent)" }}>Service</span>
      </h1>
      <p
        className="max-w-184.5 mt-3.5 px-5 font-medium text-[14px] leading-[120%] tracking-[0%] text-center"
        style={{ color: "var(--color-heading-black)" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>

      <ul className="mt-13.5 w-full grid grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <li
            key={s.id}
            className="flex flex-col pt-11 pb-7.5 pl-8 pr-14.5 rounded-[12px] border border-[var(--color-service-border)] hover:bg-[var(--color-white-background)] hover:border-transparent hover:shadow-[0px_4px_90.3px_0px_var(--color-service-shadow)] transition-colors transition-shadow"
          >
            <Image
              src={s.image}
              alt={s.title}
              width={84}
              height={84}
              className="object-contain w-[84px] h-[84px] max-w-[84px] max-h-[84px]"
            />
            <h3 className="mt-6 font-bold text-[24px] leading-[125%] tracking-[0px] align-middle text-[var(--color-nav-text)]">
              {s.title}
            </h3>
            <p className="mt-3.5 mb-9 font-medium text-[14px] leading-[120%] tracking-[0px] text-[var(--color-heading-black)]">
              {s.description}
            </p>
            <Button
              type="more"
              className="text-[14px]"
            >
              Read More
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;