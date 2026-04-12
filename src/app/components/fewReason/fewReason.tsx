import Image from "next/image";
import Button from "../common/button";

const REASONS = [
    "Brilliant Client Service",
    "Flexibility & Adaptability",
    "We make it Personal",
    "We have experts in our team",
];

export default function FewReason() {
    return (
        <section className="w-full bg-(--color-background) py-20">
            <div className="w-full px-6 lg:px-25">
                <div className="relative w-full overflow-hidden rounded-[28px] border border-[#F8BECD] bg-[#FDEBF0] px-6 py-10 sm:px-10 lg:p-16">
                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div className="max-w-125">
                            <h2 className="font-dm-sans text-[36px] font-bold leading-[100%] tracking-[0%] text-(--color-heading-black)">
                                Few Reasons Why you
                                <br />
                                Choose us?
                            </h2>

                            <p className="mt-3.5 font-dm-sans text-[14px] font-medium leading-[100%] tracking-[0%] text-(--color-heading-black)">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                            </p>

                            <ul className="mt-8 space-y-4" aria-label="Reasons to choose us">
                                {REASONS.map((reason) => (
                                    <li key={reason} className="flex items-center gap-3">
                                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAC4D2]">
                                            <Image
                                                src="/tic_icon.svg"
                                                alt=""
                                                width={12}
                                                height={12}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="font-dm-sans text-[20px] font-semibold leading-[100%] tracking-[0%] text-(--color-heading-black)">
                                            {reason}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-9">
                                <Button
                                    type="base"
                                    verticalPadding="py-3.5"
                                    horizontalPadding="px-6"
                                    child={
                                        <>
                                            <span className="font-dm-sans text-[14px] font-bold">
                                                Schedule A Meeting
                                            </span>
                                            <Image
                                                src="/arrow_right.svg"
                                                alt=""
                                                width={10}
                                                height={9}
                                                className="ml-2"
                                                aria-hidden="true"
                                            />
                                        </>
                                    }
                                />
                            </div>
                        </div>

                        <div className="relative mx-auto mt-10 w-full max-w-140 aspect-56/43 lg:mt-0">

                            <div className="absolute bottom-[6%] left-[10%] right-[8%] top-[31%] z-10">
                                <Image
                                    src="/pinkcircle.svg"
                                    alt=""
                                    aria-hidden="true"
                                    fill
                                    className="object-fill"
                                />

                                <div className="absolute bottom-0 left-[20%] right-[25%] z-20 aspect-327/437">
                                    <Image
                                        src="/smiling-male-office-worker 1.svg"
                                        alt="Team member"
                                        fill
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>

                            <Image
                                src="/rating_night.svg"
                                alt="Rating summary card"
                                width={312}
                                height={163}
                                className="absolute left-[5%] top-[5%] z-30 h-auto w-[52%] drop-shadow-xl"
                            />

                            <Image
                                src="/GroupIccons.svg"
                                alt="Connected platforms"
                                width={237}
                                height={242}
                                className="absolute right-[2%] top-[2%] z-30 h-auto w-[29%] drop-shadow-xl"
                            />

                            <Image
                                src="/calender.svg"
                                alt="Booking calendar"
                                width={289}
                                height={248}
                                className="absolute bottom-[1%] left-0 z-30 h-auto w-[40%] drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}