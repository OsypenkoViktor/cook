import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

type IButtonType = "primary" | "secondary" | "alarm" | "link" | "icon";
type IButtonSize = "small" | "medium" | "large";

const buttonStyles = tv({
  base: " rounded-md border-border transition ease-in-out active:bg-white active:text-black",
  variants: {
    type: {
      primary: "bg-primary text-white border hover:bg-muted hover:text-black",
      secondary:
        "bg-secondary text-white py-1 border hover:bg-muted hover:text-black",
      alarm:
        "bg-danger text-black border border-red-700 hover:bg-red-600 hover:text-white ",
      link: "text-blue-500 underline m-1 border-none",
      icon: "bg-transparent rounded-full w-auto h-auto",
    },
    size: {
      small: "text-sm px-2 py-1 m-1",
      medium: "text-base px-4 py-1 m-2",
      large: "text-lg px-5 py-2 m-3",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "medium",
  },
});

interface ButtonProps {
  type?: IButtonType;
  size?: IButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  type,
  size,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(buttonStyles({ type, size }), className)}
    >
      {children}
    </button>
  );
}
