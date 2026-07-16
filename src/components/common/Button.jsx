import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(
  (
    {
      children,
      className,
      type = "button",
      disabled = false,
      size = "md",
      variant = "success",
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "py-1.5 px-4 text-sm rounded-lg",
      md: "py-2 px-6 text-base rounded-xl",
      lg: "py-3 px-8 text-lg rounded-xl w-full",
    };

    const variantStyles = {
      success: "bg-[#00aa5b] hover:bg-[#008f4d] text-white shadow-[#00aa5b]/20",
      danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-500/20",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-none border border-slate-200",
      blue: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "active:scale-[0.98] font-bold transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
