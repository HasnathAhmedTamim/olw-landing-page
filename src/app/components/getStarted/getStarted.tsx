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
        <section className="mt-17 flex flex-col items-center">
            <h1 id="services-heading" className="text-[32px] font-bold">
                <span style={{ color: "var(--color-heading-black)" }}>
                    Getting Started is{" "}
                </span>
                <span style={{ color: "var(--color-accent)" }}>Easy</span>
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
            <ul className="mt-11 w-full max-w-[938px] grid grid-cols-3 gap-10">
                {GET_STARTED.map((getStarted, i) => (
                    <li key={getStarted.id} className="w-full relative">
                        <span className="absolute -top-[20px] -left-[20px] w-[76px] h-[76px] rounded-full border-[5px] border-[color:var(--color-accent)] bg-[color:var(--color-white-background)] flex items-center justify-center pointer-events-none">
                            <span
                                className="font-medium text-[29.23px] leading-[100%] tracking-[0%] text-[color:var(--color-heading-black)]"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </span>
                        <div className="w-full h-48 flex items-center justify-center border border-[color:var(--color-service-border)] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_var(--color-tools-shadow)] transition-shadow duration-200">
                            <Image
                                src={getStarted.image}
                                width={getStarted.width}
                                height={getStarted.height}
                                alt={`Get Started ${getStarted.id}`}
                            />
                        </div>
                        <p
                            className="mt-8 px-4 font-semibold text-[20px] leading-[100%] tracking-[0%] text-center text-[color:var(--color-heading-black)]"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {getStarted.text}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
