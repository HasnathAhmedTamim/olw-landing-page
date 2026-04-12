"use client";

import React from "react";
import Button from "./button";

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
		<Button
			buttonType="button"
			onClick={() => onChange(!checked)}
			aria-label={ariaLabel}
			aria-pressed={checked}
			className={`
        relative inline-flex h-7 w-14 items-center 
        rounded-full 
        transition-colors 
        focus:outline-none 
        focus:ring-2 
				focus:ring-(--color-accent) 
        focus:ring-offset-2
				${checked ? "bg-(--color-accent)" : "bg-gray-200"}
        ${className}
      `}
		>
			<span
				className={`
          inline-block h-5 w-5 
          transform 
          rounded-full 
          bg-white 
          shadow 
          transition duration-200 ease-in-out
          ${checked ? "translate-x-8" : "translate-x-1"}
        `}
			/>
		</Button>
	);
};

export default Toggle;