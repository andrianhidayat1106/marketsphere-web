export default function Address({ address }) {
  return (
    <div
      key={address.id}
      className={`p-6 rounded-2xl border transition-all ${
        address.isDefault
          ? "border-[#00aa5b] bg-[#00aa5b]/[0.02] ring-1 ring-[#00aa5b]"
          : "border-slate-100 hover:border-slate-200 bg-white"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-slate-900">
            {address.name} | {address.label}
          </h3>
          {address.isDefault && (
            <span className="text-[9px] font-black bg-[#00aa5b] text-white px-2 py-0.5 rounded-md uppercase tracking-widest">
              Default
            </span>
          )}
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-500 mb-2">
        {address.phone}
      </p>
      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-6">
        {address.address}
      </p>
      <div className="flex gap-4">
        <button className="text-xs font-bold text-[#00aa5b] hover:underline">
          Edit
        </button>
        {!address.isDefault && (
          <button className="text-xs font-bold text-red-500 hover:underline">
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
