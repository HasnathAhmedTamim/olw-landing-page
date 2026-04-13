import Image from "next/image";

type Review = {
  id: number;
  name: string;
  text: string;
  avatar: string;
  isActive: boolean;
};

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/jenny.png",
    isActive: false,
  },
  {
    id: 2,
    name: "Esther Howard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/howard.png",
    isActive: true,
  },
  {
    id: 3,
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/fox.png",
    isActive: false,
  },
];

export default function Reviews() {
  return (
    <section className="pt-16 lg:pt-24 pb-45 overflow-hidden">
      <div className="w-full">

        {/* heading */}
        <div className="mx-auto flex max-w-360 flex-col items-center px-[clamp(16px,7vw,100px)]">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[32px] leading-[100%] tracking-[0%] text-center">
            <span className="text-(--color-heading-black)">Check Our Clients </span>
            <span className="text-(--color-accent)">Review</span>
          </h2>

          <p className="max-w-184.5 mt-3.5 px-5 font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[100%] tracking-[0%] text-center text-(--color-heading-black)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* cards */}
        <div className="mt-15 w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => {
            const isOddCard = review.id % 2 === 1;

            return (
              <article
                key={review.id}
                className={`
                flex w-full flex-col items-start gap-5 rounded-[11px] border p-5 sm:h-50 sm:flex-row sm:items-center sm:p-6
                ${isOddCard ? "bg-[#F6F6F6] border-[#F6F6F6]" : "bg-white border-white shadow-[0_4px_77.4px_0px_#88888869]"}
                `}
              >
                {/* avatar */}
                <div className="shrink-0">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200 sm:h-20 sm:w-20">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[100%] tracking-[0%] text-(--color-heading-black)">
                    {review.name}
                  </h3>

                  <p className="mt-2 font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[100%] tracking-[0%] text-(--color-heading-black)">
                    {review.text}
                  </p>

                  {/* stars */}
                  <div className="mt-3 flex items-center gap-1" aria-label="4 out of 4 stars">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Image
                        key={index}
                        src="/Star 1.svg"
                        alt=""
                        aria-hidden="true"
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}