import React from "react";
import Image from "next/image";

type PartnersProps = {
    className?: string;
};

const Partners: React.FC<PartnersProps> = ({ className }) => {
    const partners = Array.from({ length: 11 }, (_, i) => i + 1);

    return (
        <section className={`w-full bg-(--color-partners-bg) ${className ?? ""}`}>
            <ul
                className="m-0 grid list-none grid-cols-2 items-center gap-x-6 gap-y-5 px-6 py-5 sm:grid-cols-3 lg:flex lg:items-center lg:justify-start lg:gap-16.25 lg:px-0 lg:py-0"
                role="list"
                aria-label="Partners"
            >
                {partners.map((i) => (
                    <li
                        key={i}
                        className={`flex h-10.5 items-center justify-center lg:my-5 ${
                            i === 1 ? "lg:pl-22.5" : ""
                        } ${i === partners.length ? "lg:pr-22.5" : ""}`}
                        role="listitem"
                    >
                        <Image
                            src={`/partner-${i}.svg`}
                            alt={`Partner ${i}`}
                            width={189}
                            height={42}
                            className="block h-auto w-full max-w-47.25 max-h-10.5 object-contain"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Partners;
