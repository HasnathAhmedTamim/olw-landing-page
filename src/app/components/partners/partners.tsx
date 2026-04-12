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
                className="flex items-center justify-start gap-16.25 list-none m-0 p-0 overflow-x-hidden"
                role="list"
                aria-label="Partners"
            >
                {partners.map((i) => (
                    <li
                        key={i}
                        className={`flex-none flex items-center justify-center h-10.5 my-5 ${
                            i === 1 ? "pl-22.5" : ""
                        } ${i === partners.length ? "pr-22.5" : ""}`}
                        role="listitem"
                    >
                        <Image
                            src={`/partner-${i}.svg`}
                            alt={`Partner ${i}`}
                            width={189}
                            height={42}
                            className="block max-h-10.5 w-auto h-auto"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Partners;
