import React from "react";
import { Slot } from "radix-ui";
import { twMerge } from "tailwind-merge";

type HTMLElement = "div" | "section" | "footer" | "header" | "nav";

export type ContainerProps = React.ComponentProps<"div"> & {
  asChild?: string;
  fullWidth?: boolean;
  as?: HTMLElement;
};

export const Container: React.FC<ContainerProps> = (props) => {
  const {
    asChild,
    as = "div",
    className,
    fullWidth,
    children,
    ...restProps
  } = props;
  const Component = asChild ? Slot.Root : as;

  return (
    <Component
      {...restProps}
      className={twMerge(
        "px-4 sm:px-6 lg:px-8 w-full",
        !fullWidth && "max-w-7xl mx-auto",
        className
      )}>
      {children}
    </Component>
  );
};
