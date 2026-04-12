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
      className="mt-16 flex flex-col items-center px-6 lg:px-25"
    >
      {/* Heading */}
      <h2
        id="services-heading"
        className="text-center text-[28px] font-bold sm:text-[32px]"
      >
        <span className="text-[var(--color-heading-black)]">Our </span>
        <span className="text-[var(--color-accent)]">Service</span>
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-3xl px-2 text-center text-[14px] font-medium leading-[150%] text-[var(--color-heading-black)] sm:px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>

      {/* Grid */}
      <ul className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li
            key={s.id}
            className="
              flex flex-col rounded-xl border 
              border-[var(--color-service-border)]
              p-6
              transition-all duration-300
              hover:bg-white
              hover:border-transparent
              hover:shadow-lg
            "
          >
            <Image
              src={s.image}
              alt={s.title}
              width={84}
              height={84}
              className="h-21 w-21 object-contain"
            />

            <h3 className="mt-6 text-[20px] font-bold leading-[125%] text-[var(--color-nav-text)] sm:text-[24px]">
              {s.title}
            </h3>

            <p className="mt-3.5 mb-8 text-[14px] font-medium leading-[150%] text-[var(--color-description-text)]">
              {s.description}
            </p>

            <Button variant="more" className="text-[14px]">
              Read More
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;