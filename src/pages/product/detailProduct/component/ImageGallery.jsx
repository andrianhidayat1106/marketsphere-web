import React from "react";

const ImageGallery = ({ images, productName }) => {
  return (
    <div className="col-span-5 space-y-4">
      <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-6 left-6 z-10 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg">
          Flash Sale
        </div>
        <div className="aspect-square bg-slate-50 rounded-[2rem] overflow-hidden">
          <img
            src={images[0]}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
              idx === 0
                ? "border-[#00aa5b]"
                : "border-transparent hover:border-slate-200"
            }`}
          >
            <img
              src={img}
              alt={`View ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        <button className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm border-2 border-transparent">
          +2
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
