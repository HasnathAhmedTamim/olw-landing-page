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
    verticalPadding = "",
    horizontalPadding = "",
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
        base: "bg-[var(--color-accent)] text-white border border-transparent rounded-[5px] transition-colors duration-150 ease-in-out hover:bg-[var(--color-accent-hover)]",
        more: "opacity-100 w-fit px-6 py-1.75 rounded-[50px] border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] transition-colors duration-150 ease-in-out hover:bg-[var(--color-accent-hover)]/10",
        start: "py-3 w-full border border-[var(--color-accent)] rounded-[4px] bg-[var(--color-white-background)] text-[var(--color-accent)] transition-colors duration-150 ease-in-out hover:bg-[var(--color-white-background)] hover:border-transparent",
    };

    const selectedVariant = variant ?? type;

    const content = children ?? child;

    const classes = [
        verticalPadding,
        horizontalPadding,
        "inline-flex items-center justify-center font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
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
