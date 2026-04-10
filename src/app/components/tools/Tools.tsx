import Image from "next/image";

type ToolItem = {
  name: string;
  logo: string;
  featured?: boolean;
};

const tools: ToolItem[] = [
  { name: "PriceLabs", logo: "/logos/price.png", featured: true },
  { name: "Wheelhouse", logo: "/logos/wheelhouse.png" },
  { name: "Beyond Pricing", logo: "/logos/beyond.png" },
  { name: "Hostfully", logo: "/logos/housefully.png" },
  { name: "Guesty", logo: "/logos/guesty.png" },
  { name: "Lodgify", logo: "/logos/lodgify.png" },
  { name: "Hostfully", logo: "/logos/housefully.png" },
  { name: "Guesty", logo: "/logos/guesty.png" },
  { name: "Lodgify", logo: "/logos/lodgify.png" },
];

export default function Tools() {
  return (
    <section className="w-full py-16 sm:py-20" aria-labelledby="tools-title">
      <div className="w-full">
        <header className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            id="tools-title"
            className="inline-flex items-center gap-2 text-3xl font-bold leading-none text-[#1e1e1e] sm:text-4xl"
          >
            <span>Our</span>
            <span className="text-(--color-accent)">Tools</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-[#1e1e1e]/70 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </header>

        <div className="mt-10 w-full rounded-sm bg-[#ececec] p-4 sm:p-6 md:pt-9.5 md:pb-21.25 md:pl-65.75 md:pr-54.25">
          <div className="mx-auto grid grid-cols-1 justify-center gap-x-8.5 gap-y-10 sm:grid-cols-[repeat(2,290px)] md:grid-cols-[repeat(3,290px)]">
            {tools.map((tool, index) => (
              <article
                key={tool.name + "-" + index}
                className={[
                  "flex h-34.75 w-72.5 items-center justify-center rounded-[11px] bg-white",
                  index === 0 ? "pt-11.75 pr-17.5 pb-11.5 pl-11.5" : "px-6 py-6",
                  "transition-shadow duration-200",
                  tool.featured
                    ? "ring-2 ring-[rgba(237,60,106,0.16)] shadow-[0_0_20px_rgba(237,60,106,0.16)]"
                    : "hover:shadow-md",
                ].join(" ")}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name + " logo"}
                  width={174}
                  height={46}
                  className="h-11.5 w-43.5 object-contain"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}