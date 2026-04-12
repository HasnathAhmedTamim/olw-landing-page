import Image from "next/image";

interface Started {
    id: string;
    text: string;
    image: string;
    width: number;
    height: number;
}

const GET_STARTED: Started[] = [
    {
        id: "1",
        text: "Add requirements & sign up today",
        image: "/started-1.svg",
        width: 72,
        height: 58,
    },
    {
        id: "2",
        text: "Connect with your CSM & onboarding team",
        image: "/started-2.svg",
        width: 108,
        height: 124,
    },
    {
        id: "3",
        text: "Meet your STR Assistant next week",
        image: "/started-3.svg",
        width: 70,
        height: 58,
    },
];

export const GetStarted = () => {
    return (
        <section className="mt-16 flex w-full flex-col items-center px-6 lg:px-20">

            {/* Heading */}
            <h2
                id="get-started-heading"
                className="text-center text-[28px] font-bold sm:text-[32px]"
            >
                <span className="text-[var(--color-heading-black)]">
                    Getting Started is{" "}
                </span>
                <span className="text-[var(--color-accent)]">Easy</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-3xl text-center text-[14px] font-medium leading-[150%] text-[var(--color-heading-black)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Steps */}
            <ul
                className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                aria-label="Getting started steps"
            >
                {GET_STARTED.map((step, i) => (
                    <li key={step.id} className="relative">

                        {/* Step number */}
                        <span
                            className="
                absolute -top-4 -left-4
                flex h-12 w-12 items-center justify-center
                rounded-full border-4 border-[var(--color-accent)]
                bg-white
                sm:h-16 sm:w-16
              "
                        >
                            <span className="text-[18px] font-semibold text-[var(--color-heading-black)] sm:text-[22px]">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </span>

                        {/* Card */}
                        <div
                            className="
                flex h-48 items-center justify-center
                rounded-xl border border-[var(--color-service-border)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
                        >
                            <Image
                                src={step.image}
                                width={step.width}
                                height={step.height}
                                alt={step.text}
                                className="object-contain"
                            />
                        </div>

                        {/* Text */}
                        <p className="mt-6 text-center text-[16px] font-semibold text-[var(--color-heading-black)]">
                            {step.text}
                        </p>

                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GetStarted;