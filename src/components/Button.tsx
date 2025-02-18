import * as React from "react";
import { Slot } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2 text-foreground whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  ],
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      inverted: "bg-foreground text-background hover:bg-foreground/85"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      xl: "h-12 rounded-lg px-10 text-base",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean;
    isLoading?: boolean;
  };

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    asChild,
    disabled,
    isLoading,
    children,
    variant,
    size,
    className,
    ...restProps
  } = props;

  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      {...restProps}
      disabled={disabled || isLoading}
      className={buttonVariants({ variant, size, className })}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Component>
  );
};
