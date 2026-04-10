import React from "react";

type Variant = "base" | "more" | "start";
type Element = "button" | "span";

interface ButtonProps {
    verticalPadding?: string;
    horizontalPadding?: string;
    child?: React.ReactNode;
    children?: React.ReactNode;
    type?: Variant;
    className?: string;
    element?: Element;
    buttonType?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
    verticalPadding = "py-2",
    horizontalPadding = "px-4",
    child = null,
    children,
    type = "base",
    className = "",
    element = "button",
    buttonType = "button",
    onClick,
}) => {
    const variants: Record<Variant, string> = {
        base: "bg-[var(--color-accent)] text-white border border-transparent rounded-[5px] transition-colors duration-150 ease-in-out hover:bg-[var(--color-accent-hover)]",
        more: "bg-blue-600 text-white hover:bg-blue-700 rounded-md",
        start: "bg-green-600 text-white hover:bg-green-700 rounded-md",
    };

    const content = children ?? child;

    const classes = [
        verticalPadding,
        horizontalPadding,
        "inline-flex items-center justify-center font-bold focus:outline-none",
        variants[type],
        className,
    ].join(" ");

    if (element === "span") {
        return <span className={classes}>{content}</span>;
    }

    return (
        <button type={buttonType} className={classes} onClick={onClick}>
            {content}
        </button>
    );
};

export default Button;
