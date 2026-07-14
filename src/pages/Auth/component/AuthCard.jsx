export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-500">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
