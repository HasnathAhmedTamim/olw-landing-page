import React from "react";

type Variant = "base" | "more" | "start";
type Element = "button" | "span";
type NativeButtonType = "button" | "submit" | "reset";
type LegacyTypeProp = Variant | NativeButtonType;

interface ButtonProps
    extends Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "type" | "children" | "className"
    > {
    verticalPadding?: string;
    horizontalPadding?: string;
    children?: React.ReactNode;
    child?: React.ReactNode;
    variant?: Variant;
    type?: LegacyTypeProp;
    className?: string;
    element?: Element;
    buttonType?: NativeButtonType;
}

function isNativeButtonType(
    value: LegacyTypeProp | undefined
): value is NativeButtonType {
    return value === "button" || value === "submit" || value === "reset";
}

const Button: React.FC<ButtonProps> = ({
    verticalPadding = "",
    horizontalPadding = "",
    children,
    child,
    variant,
    type: legacyVariant,
    className = "",
    element = "button",
    buttonType,
    disabled = false,
    ...restButtonProps
}) => {
    const resolvedVariant =
        variant ??
        (isNativeButtonType(legacyVariant)
            ? "base"
            : legacyVariant ?? "base");

    const resolvedButtonType =
        buttonType ??
        (isNativeButtonType(legacyVariant)
            ? legacyVariant
            : "button");

    const content = children ?? child;

    const variants: Record<Variant, string> = {
        base: "bg-[var(--color-accent)] text-white border border-transparent rounded-[5px] transition-colors duration-150 hover:bg-[var(--color-accent-hover)]",

        more: "w-fit px-6 py-1.5 rounded-[50px] border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] transition-colors duration-150 hover:bg-[var(--color-accent)]/10",

        start:
            "py-3 w-full border border-[var(--color-accent)] rounded-[4px] bg-[var(--color-white-background)] text-[var(--color-accent)] transition-colors duration-150 hover:bg-[var(--color-accent)] hover:text-white",
    };

    const classes = [
        verticalPadding,
        horizontalPadding,
        "inline-flex items-center justify-center font-medium",
        "focus:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        variants[resolvedVariant],
        className,
    ].join(" ");

    if (element === "span") {
        return <span className={classes}>{content}</span>;
    }

    return (
        <button
            type={resolvedButtonType}
            className={classes}
            disabled={disabled}
            {...restButtonProps}
        >
            {content}
        </button>
    );
};

export default Button;