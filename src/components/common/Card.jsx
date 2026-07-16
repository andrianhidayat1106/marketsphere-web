import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Card = forwardRef(
  ({ children, className, width = "8", padding = "8", ...props }, ref) => {
    const widthClasses = {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      6: "col-span-6",
      8: "col-span-8",
      12: "col-span-12",
    };

    const paddingClasses = {
      4: "p-4",
      6: "p-6",
      8: "p-8",
      10: "p-10",
    };

    const selectedWidth = widthClasses[width] || widthClasses["8"];
    const selectedPadding = paddingClasses[padding] || paddingClasses["8"];

    return (
      <section
        ref={ref}
        className={cn(
          "bg-white rounded-3xl border border-slate-100 shadow-sm",
          selectedWidth,
          selectedPadding,
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Card.displayName = "Card";

export default Card;
