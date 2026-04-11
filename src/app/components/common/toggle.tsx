"use client";

import React from "react";

interface ToggleProps {
	checked: boolean;
	onChange: (nextValue: boolean) => void;
	className?: string;
	ariaLabel?: string;
}

const Toggle: React.FC<ToggleProps> = ({
	checked,
	onChange,
	className = "",
	ariaLabel = "Toggle switch",
}) => {
	return (
		<button
			type="button"
			onClick={() => onChange(!checked)}
			aria-label={ariaLabel}
			className={[
				"relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2",
				className,
			].join(" ")}
		>
			<span
				className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
					checked ? "translate-x-8" : "translate-x-1"
				}`}
			/>
		</button>
	);
};

export default Toggle;
