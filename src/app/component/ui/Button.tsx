import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "light"
    | "dark"
    | "neumorphism-primary";
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx(
      "px-4 py-2 font-medium rounded",
      {
        "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800":
          variant === "primary",
        "bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600":
          variant === "secondary",
        "bg-accent text-black dark:bg-accent-dark": variant === "accent",
        "bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800":
          variant === "light",
        "bg-black text-white hover:bg-gray-700 dark:bg-gray-600":
          variant === "dark",
        "shadow-neumorphic-light dark:shadow-neumorphic-dark":
          variant === "neumorphism-primary",
      },
      props.disabled && "opacity-50 cursor-not-allowed",
      className
    )
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
