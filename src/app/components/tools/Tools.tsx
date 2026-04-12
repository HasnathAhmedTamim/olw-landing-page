import Image from "next/image";

interface Tool {
  id: string;
  image: string;
  width: number;
  height: number;
};

const TOOLS: Tool[] = [
  {
    id: "1",
    image: "/tools-1.svg",
    width: 174,
    height: 46,
  },
  {
    id: "2",
    image: "/tools-2.svg",
    width: 210,
    height: 27,
  },
  {
    id: "3",
    image: "/tools-3.svg",
    width: 193,
    height: 31,
  },
  {
    id: "4",
    image: "/tools-4.svg",
    width: 151,
    height: 56,
  },
  {
    id: "5",
    image: "/tools-5.svg",
    width: 135,
    height: 55,
  },
  {
    id: "6",
    image: "/tools-6.svg",
    width: 193,
    height: 31,
  },
  {
    id: "7",
    image: "/tools-4.svg",
    width: 151,
    height: 56,
  },
  {
    id: "8",
    image: "/tools-5.svg",
    width: 135,
    height: 55,
  },
  {
    id: "9",
    image: "/tools-6.svg",
    width: 193,
    height: 31,
  },
];

export const Tools = () => {
  return (
    <section className="mt-21 flex flex-col items-center">
      <h1 id="tools-heading" className="text-center text-[28px] font-bold sm:text-[32px]">
        <span className="text-(--color-heading-black)">Our </span>
        <span className="text-(--color-accent)">Tools</span>
      </h1>
      <p className="max-w-184.5 mt-3.5 px-2 font-medium text-[14px] leading-[120%] tracking-[0%] text-center text-(--color-heading-black) sm:px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <div className="mt-34 flex w-full items-center justify-center bg-(--color-partners-bg) px-6 pt-9.5 pb-21.25 lg:px-25">
        <ul className="grid w-full max-w-234.5 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8.5 lg:gap-y-10">
          {TOOLS.map((tool) => (
            <li
              key={tool.id}
              className="flex h-30 items-center justify-center rounded-xl bg-(--color-white-background) transition-shadow duration-200 hover:shadow-[0_8px_24px_var(--color-tools-shadow)] sm:h-34.75"
            >
              <Image
                src={tool.image}
                width={tool.width}
                height={tool.height}
                alt={`Tool ${tool.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;