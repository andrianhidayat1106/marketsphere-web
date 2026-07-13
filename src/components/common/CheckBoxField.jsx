export default function CheckBoxField({
  label,
  id,
  error,
  isRequired = false,
  children,
  ...props
}) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className={`w-5 h-5 rounded border-slate-300 text-[#00aa5b] focus:ring-[#00aa5b]/20 cursor-pointer mt-0.5 transition-all ${
          error ? "border-rose-500 focus:ring-rose-500/20" : ""
        }`}
        {...props}
      />

      {(children || label) && (
        <label
          htmlFor={id}
          className="ml-3 text-sm text-slate-600 cursor-pointer select-none leading-relaxed"
        >
          {children || label}
        </label>
      )}

      {error && (
        <p className="mt-1.5 text-xs text-rose-500 font-medium text-left">
          {error}
        </p>
      )}
    </div>
  );
}
