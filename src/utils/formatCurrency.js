/**
 * Format angka ke mata uang Rupiah (IDR).
 * Contoh: 5499000 → "Rp5.499.000"
 */
export function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

