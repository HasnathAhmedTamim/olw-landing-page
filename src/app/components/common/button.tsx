import React from "react";

type Variant = "base" | "more" | "start";
type Element = "button" | "span";

interface ButtonProps {
    verticalPadding?: string;
    horizontalPadding?: string;
    child?: React.ReactNode;
    children?: React.ReactNode;
    variant?: Variant;
    type?: Variant;
    className?: string;
    element?: Element;
    buttonType?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    verticalPadding = "py-2",
    horizontalPadding = "px-4",
    child = null,
    children,
    variant,
    type = "base",
    className = "",
    element = "button",
    buttonType = "button",
    onClick,
    disabled = false,
}) => {
    const variants: Record<Variant, string> = {
        base: "bg-(--color-accent) text-white border border-transparent rounded-[5px] transition-colors duration-150 ease-in-out hover:bg-(--color-accent-hover)",
        more: "bg-blue-600 text-white hover:bg-blue-700 rounded-md",
        start: "bg-green-600 text-white hover:bg-green-700 rounded-md",
    };

    const selectedVariant = variant ?? type;

    const content = children ?? child;

    const classes = [
        verticalPadding,
        horizontalPadding,
        "inline-flex items-center justify-center font-bold focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        variants[selectedVariant],
        className,
    ].join(" ");

    if (element === "span") {
        return <span className={classes}>{content}</span>;
    }

    return (
        <button type={buttonType} className={classes} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
};

export default Button;
