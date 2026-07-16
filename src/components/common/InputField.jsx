import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const InputField = forwardRef(
  (
    {
      label,
      id,
      type = "text",
      className,
      inputClassName,
      placeholder,
      isRequired = false,
      error,
      isReadonly = false,
      isBold = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-semibold text-slate-700 mb-2 text-left"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1"> *</span>}
          </label>
        )}

        <input
          ref={ref}
          readOnly={isReadonly}
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border outline-none transition-all placeholder:text-slate-400",
            isReadonly
              ? "bg-slate-50 border-slate-100 text-slate-500 cursor-default"
              : error
              ? "bg-white border-rose-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
              : "bg-white border-slate-200 focus:border-[#00aa5b] focus:ring-4 focus:ring-[#00aa5b]/10",
            isBold && "text-sm font-semibold text-slate-700",
            inputClassName
          )}
          {...props}
        />
        
        {error && (
          <p className="mt-1.5 text-xs text-rose-500 font-medium text-left">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
