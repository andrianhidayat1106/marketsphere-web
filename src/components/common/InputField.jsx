export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  isRequired = false,
  error,
  ...props
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-slate-700 mb-2 text-left"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 rounded-xl border outline-none transition-all placeholder:text-slate-400 ${
          error
            ? "border-rose-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
            : "border-slate-200 focus:border-[#00aa5b] focus:ring-4 focus:ring-[#00aa5b]/10"
        } `}
        required={isRequired}
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
