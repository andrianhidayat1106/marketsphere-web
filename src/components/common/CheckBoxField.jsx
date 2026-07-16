import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const CheckBoxField = forwardRef(
  (
    { label, id, className, error, isRequired = false, children, ...props },
    ref
  ) => {
    return (
      <div className={cn("flex items-start flex-col", className)}>
        <div className="flex items-center">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            required={isRequired}
            className={cn(
              "w-5 h-5 rounded border-slate-300 text-[#00aa5b] focus:ring-[#00aa5b]/20 cursor-pointer mt-0.5 transition-all",
              error && "border-rose-500 focus:ring-rose-500/20"
            )}
            {...props}
          />

          {(children || label) && (
            <label
              htmlFor={id}
              className="ml-3 text-sm text-slate-600 cursor-pointer select-none leading-relaxed"
            >
              {children || label}
              {isRequired && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-rose-500 font-medium text-left ml-8">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CheckBoxField.displayName = "CheckBoxField";

export default CheckBoxField;
