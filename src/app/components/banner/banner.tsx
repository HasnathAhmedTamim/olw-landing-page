import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";

type FloatingLogo = {
	id: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	className: string;
};

const floatingLogos: FloatingLogo[] = [
	{
		id: "airbnb",
		src: "/airbnb_logo.svg",
		alt: "Airbnb logo",
		width: 106,
		height: 106,
		className:
			"left-[18%] top-[17%] hidden sm:block md:left-[19%] md:top-[18%]",
	},
	{
		id: "booking",
		src: "/booking_logo.svg",
		alt: "Booking.com logo",
		width: 66,
		height: 66,
		className:
			"right-[18%] top-[20%] hidden sm:block md:right-[19%] md:top-[21%]",
	},
	{
		id: "vrbo",
		src: "/vrbo_logo.svg",
		alt: "VRBO logo",
		width: 76,
		height: 76,
		className:
			"left-[21%] bottom-[15%] hidden sm:block md:left-[22%] md:bottom-[16%]",
	},
	{
		id: "tripadvisor",
		src: "/tripadvisor_logo.svg",
		alt: "Tripadvisor logo",
		width: 90,
		height: 90,
		className:
			"right-[18%] bottom-[12%] hidden sm:block md:right-[19%] md:bottom-[13%]",
	},
];

const dots = [
	"left-[6%] top-[24%] bg-indigo-500",
	"left-[14%] top-[62%] bg-red-400",
	"left-[7%] bottom-[6%] bg-yellow-400",
	"left-1/2 top-[18%] bg-emerald-400",
	"right-[13%] top-[38%] bg-yellow-400",
	"right-[7%] bottom-[18%] bg-blue-900",
	"left-1/2 bottom-[6%] bg-cyan-400",
];

function FloatingLogoCard({
	src,
	alt,
	width,
	height,
	className,
}: Omit<FloatingLogo, "id">) {
	return (
		<div
			className={["absolute z-10 rounded-3xl p-3", className].join(" ")}
			aria-hidden="true"
		>
			<div className="overflow-hidden rounded-2xl">
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className="h-auto w-auto object-contain"
				/>
			</div>
		</div>
	);
}

export const Banner = () => {
	return (
		<>
			<section
				className="relative isolate overflow-hidden bg-[#f8f8f7]"
				aria-labelledby="hero-assistants-title"
			>
				<div
					className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:120px_120px]"
					aria-hidden="true"
				/>

				<div
					className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,rgba(255,255,255,0.55)_100%)]"
					aria-hidden="true"
				/>

				<div
					className="pointer-events-none absolute inset-0"
					aria-hidden="true"
				>
					{dots.map((dotClass, index) => (
						<span
							key={index}
							className={`absolute h-3.5 w-3.5 rounded-full shadow-sm ${dotClass}`}
						/>
					))}
				</div>

				<div
					className="pointer-events-none absolute inset-0"
					aria-hidden="true"
				>
					{floatingLogos.map((logo) => (
						<FloatingLogoCard key={logo.id} {...logo} />
					))}
				</div>

				<div className="mx-auto flex min-h-[584px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
					<div className="mx-auto max-w-4xl text-center">
						<h1
							id="hero-assistants-title"
							className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl"
						>
							<span className="block font-dm-sans font-bold text-[48px] leading-[130%] tracking-[0%] text-(--color-heading-black)">
								Airbnb Assistants For
							</span>

							<span className="mt-2 block font-dm-sans font-medium text-[38.13px] leading-[130%] tracking-[0%] text-(--color-heading-black) text-center">
								Property Management
							</span>
						</h1>

						<p className="mx-auto mt-8 max-w-3xl font-dm-sans font-medium text-[14px] leading-[100%] tracking-[0%] text-(--color-heading-black) text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<div className="mt-10 flex flex-col items-center justify-center gap-5">
							<Button
								type="base"
								verticalPadding="py-[13.5px]"
								horizontalPadding="px-[22px]"
								child={
									<>
										<span className="font-bold text-[14px]">
											Schedule A Meeting
										</span>
										<Image
											src="/arrow_right.svg"
											alt="arrow"
											width={10}
											height={9}
											className="ml-2"
										/>
									</>
								}
							/>
							<Link
								href="/pricing"
								className="text-lg font-medium text-slate-900 underline underline-offset-4 transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2"
							>
								See Pricing
							</Link>
						</div>
					</div>
				</div>
			</section>

			<p className="mb-9 mt-10 text-center font-dm-sans text-[20px] font-semibold leading-[100%] tracking-[0%] text-(--color-heading-black)">
				Trusted by leaders in 50+ industries
			</p>
		</>
	);
};

export default Banner;
