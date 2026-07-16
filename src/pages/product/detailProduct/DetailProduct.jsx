import { useState } from "react";
import ImageGallery from "./component/ImageGallery.jsx";
import ProductInfoActions from "./component/ProductInfoActions.jsx";
import ProductTabs from "./component/ProductTabs.jsx";
import { formatRupiah } from "../../../utils/formatCurrency.js";

/**
 * DetailProductPage
 * Navbar & Footer sudah di-handle oleh MainLayout.
 */
const DetailProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("Matte Black");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Product Description");

  const product = {
    name: "AuraSound Pro Active Noise Cancelling Wireless Headphones - 40h Battery, Hi-Res Audio",
    price: 3735000,
    oldPrice: 5235000,
    discount: "-28% OFF",
    rating: 4.8,
    reviews: "1.2k",
    mall: true,
    colors: [
      { name: "Matte Black", hex: "#000000" },
      { name: "Silver White", hex: "#E2E8F0" },
      { name: "Navy Blue", hex: "#1E3A8A" },
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2068&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop",
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-4 pb-20">
      <div className="grid grid-cols-12 gap-8 items-start">
        <ImageGallery images={product.images} productName={product.name} />
        <ProductInfoActions
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
          formatCurrency={formatRupiah}
        />
      </div>
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};

export default DetailProductPage;
