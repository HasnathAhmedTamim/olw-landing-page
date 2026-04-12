import React from "react";
import Image from "next/image";

type PartnersProps = {
    className?: string;
};

const Partners: React.FC<PartnersProps> = ({ className }) => {
    const partners = Array.from({ length: 11 }, (_, i) => i + 1);

    return (
        <section
            className={`w-full bg-[var(--color-partners-bg)] ${className ?? ""}`}
        >
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden overflow-x-auto">
                <ul
                    className="flex items-center gap-10 px-6 py-6 min-w-max"
                    aria-label="Partners"
                >
                    {partners.map((i) => (
                        <li key={i} className="flex-shrink-0">
                            <Image
                                src={`/partner-${i}.svg`}
                                alt={`Partner ${i}`}
                                width={160}
                                height={42}
                                className="h-auto w-auto max-h-10 object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop: centered single row */}
            <div className="hidden lg:flex justify-center">
                <ul
                    className="flex items-center gap-16 py-6"
                    aria-label="Partners"
                >
                    {partners.map((i) => (
                        <li key={i} className="flex items-center justify-center">
                            <Image
                                src={`/partner-${i}.svg`}
                                alt={`Partner ${i}`}
                                width={160}
                                height={42}
                                className="h-auto w-auto max-h-10 object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Partners;