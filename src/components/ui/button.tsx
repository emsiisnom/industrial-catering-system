import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-green-700 text-white shadow-sm hover:bg-green-800 active:bg-green-900",
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-300",
        outline:
          "border-2 border-green-700 text-green-700 bg-transparent hover:bg-green-50 active:bg-green-100",
        ghost:
          "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800",
        link:
          "text-green-700 underline-offset-4 hover:underline p-0 h-auto",
        accent:
          "bg-orange-500 text-white shadow-sm hover:bg-orange-600 active:bg-orange-700",
      },
      size: {
        sm: "h-9 px-3 text-xs rounded-md",
        default: "h-11 px-5 py-2",
        lg: "h-13 px-8 text-base rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as Record<string, unknown>
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(buttonVariants({ variant, size, className }), childProps.className as string),
        ref,
        ...props,
      })
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
