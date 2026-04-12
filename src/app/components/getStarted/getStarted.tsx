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
        width: 72.18,
        height: 58,
    },
    {
        id: "2",
        text: "Connect with your CSM & onboarding team",
        image: "/started-2.svg",
        width: 108.57,
        height: 123.74,
    },
    {
        id: "3",
        text: "Meet your STR Assistant next week",
        image: "/started-3.svg",
        width: 69.86,
        height: 58,
    },
];

export const GetStarted = () => {
    return (
        <section className="mt-17 flex w-full flex-col items-center px-4 sm:px-6 lg:px-25">
            <h1 id="services-heading" className="text-center text-[28px] font-bold sm:text-[32px]">
                <span className="text-(--color-heading-black)">Getting Started is </span>
                <span className="text-(--color-accent)">Easy</span>
            </h1>
            <p
                className="max-w-184.5 mt-3.5 px-2 font-medium text-[14px] leading-[120%] tracking-[0%] text-center text-(--color-heading-black) sm:px-5"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
            </p>
            <ul className="mt-11 grid w-full max-w-234.5 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {GET_STARTED.map((getStarted, i) => (
                    <li key={getStarted.id} className="w-full relative">
                        <span className="pointer-events-none absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border-4 border-(--color-accent) bg-(--color-white-background) sm:-left-5 sm:-top-5 sm:h-19 sm:w-19 sm:border-[5px]">
                            <span
                                className="font-dm-sans font-medium text-[22px] leading-[100%] tracking-[0%] text-(--color-heading-black) sm:text-[29.23px]"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </span>
                        <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl border border-(--color-service-border) transition-shadow duration-200 hover:shadow-[0_8px_24px_var(--color-tools-shadow)]">
                            <Image
                                src={getStarted.image}
                                width={getStarted.width}
                                height={getStarted.height}
                                alt={`Get Started ${getStarted.id}`}
                            />
                        </div>
                        <p
                            className="mt-8 px-4 text-center font-dm-sans font-semibold text-[18px] leading-[100%] tracking-[0%] text-(--color-heading-black) sm:text-[20px]"
                        >
                            {getStarted.text}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
