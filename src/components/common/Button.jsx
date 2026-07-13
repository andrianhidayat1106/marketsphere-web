export default function Button({
  children,
  type = "button",
  disabled = false,
  size = "md",
  ...props
}) {
  const sizeStyles = {
    sm: "py-2 px-4 text-sm rounded-lg",
    md: "py-3 px-6 text-base rounded-xl",
    lg: "py-4 px-8 text-lg rounded-xl w-full",
  };

  const baseStyle =
    "bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00aa5b]/20";

  return (
    <button type={type} className={`${baseStyle} ${sizeStyles[size]}`}>
      {children}
    </button>
  );
}
