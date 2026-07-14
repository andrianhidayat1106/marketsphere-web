export default function Card({ children, width = "8", padding = "8" }) {
  // Mapping untuk col-span agar Tailwind mendeteksi class-nya secara utuh
  const widthClasses = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    6: "col-span-6",
    8: "col-span-8", // Bawaan kode asli kamu
    12: "col-span-12", // Full width pada grid 12 kolom
  };

  // Mapping untuk padding
  const paddingClasses = {
    4: "p-4",
    6: "p-6",
    8: "p-8", // Bawaan kode asli kamu
    10: "p-10",
  };

  // Ambil class berdasarkan props, jika tidak ada pakai default bawaan awal (8)
  const selectedWidth = widthClasses[width] || widthClasses["8"];
  const selectedPadding = paddingClasses[padding] || paddingClasses["8"];

  return (
    <section
      className={`bg-white rounded-3xl border border-slate-100 shadow-sm ${selectedWidth} ${selectedPadding}`}
    >
      {children}
    </section>
  );
}
