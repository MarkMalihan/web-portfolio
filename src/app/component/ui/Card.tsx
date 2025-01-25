import { twMerge } from "tailwind-merge";

type CardProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        "p-5 w-full bg-white dark:bg-black border rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
