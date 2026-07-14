// Button.jsx
export default function Button({
  children,
  type = "button",
  disabled = false,
  size = "md",
  variant = "success", // Tambahkan default variant ke hijau (success)
  ...props
}) {
  const sizeStyles = {
    sm: "py-1.5 px-4 text-sm rounded-lg",
    md: "py-2 px-6 text-base rounded-xl",
    lg: "py-3 px-8 text-lg rounded-xl w-full",
  };

  // Pilihan warna tombol
  const variantStyles = {
    success: "bg-[#00aa5b] hover:bg-[#008f4d] text-white shadow-[#00aa5b]/20",
    danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-500/20",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-none border border-slate-200",
  };

  const baseStyle =
    "active:scale-[0.98] font-bold transition-all flex items-center justify-center gap-2 shadow-lg";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
