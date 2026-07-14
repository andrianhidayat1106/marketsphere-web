export default function BrandSection({ title, subtitle }) {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        alt="Warehouse interior"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 flex flex-col justify-end p-16 text-white max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md w-fit p-3 rounded-xl border border-white/20">
            <div className="w-10 h-10 bg-[#00aa5b] rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              MarketSphere
            </span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-lg text-slate-300">{subtitle}</p>
      </div>
    </div>
  );
}
