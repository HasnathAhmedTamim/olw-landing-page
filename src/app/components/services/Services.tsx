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
      className="mt-14 flex flex-col items-center px-6 lg:px-25"
    >
      <h1 id="services-heading" className="text-center text-[28px] font-bold sm:text-[32px]">
        <span className="text-(--color-heading-black)">Our </span>
        <span className="text-(--color-accent)">Service</span>
      </h1>
      <p
        className="max-w-184.5 mt-3.5 px-2 font-medium text-[14px] leading-[120%] tracking-[0%] text-center text-(--color-heading-black) sm:px-5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>

      <ul className="mt-13.5 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li
            key={s.id}
            className="flex flex-col rounded-xl border border-(--color-service-border) p-6 transition hover:bg-(--color-white-background) hover:border-transparent hover:shadow-[0px_4px_90.3px_0px_var(--color-service-shadow)] sm:pt-9 sm:pb-7.5 sm:pl-8 sm:pr-8 lg:pt-11 lg:pr-14.5"
          >
            <Image
              src={s.image}
              alt={s.title}
              width={84}
              height={84}
              className="object-contain w-21 h-21 max-w-21 max-h-21"
            />
            <h3 className="mt-6 align-middle text-[20px] font-bold leading-[125%] tracking-[0px] text-(--color-nav-text) sm:text-[24px]">
              {s.title}
            </h3>
            <p className="mt-3.5 mb-9 font-medium text-[14px] leading-[120%] tracking-[0px] text-(--color-heading-black)">
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