import React, { forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof button>

const button = tv({
  base: "rounded-md flex items-center px-8 py-2 disabled:opacity-60 ",
  variants: {
    color: {
      white: "text-white  ",
      blue: "text-blue-600  ",
      gray: "text-gray-500  ",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: " text-lg",
    },
    border: {
      blue: "border-blue-600 border-[1px]  ",
      gray: "border-gray-500 border-[1px]",
    },
    bg: {
      gray: "bg-gray-300",
      blue: "bg-blue-600",
    },
    weight: {
      bold: "font-bold",
      semiBold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "md",
    color: "white",
  },
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { color, size, border, bg, className, weight, ...rest } = props
    return (
      <button
        className={button({ border, size, color, bg, className, weight })}
        {...rest}
        ref={ref}
      />
    )
  }
)
