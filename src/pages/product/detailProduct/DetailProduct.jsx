import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import ImageGallery from "./component/ImageGallery.jsx";
import ProductInfoActions from "./component/ProductInfoActions.jsx";
import ProductTabs from "./component/ProductTabs.jsx";
import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";

const DetailProduct = () => {
  const [selectedColor, setSelectedColor] = useState("Matte Black");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Product Description");

  const product = {
    name: "AuraSound Pro Active Noise Cancelling Wireless Headphones - 40h Battery, Hi-Res Audio",
    price: 249.0,
    oldPrice: 349.0,
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
        {/* Top Navigation */}
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* 1. Image Gallery Component */}
            <ImageGallery images={product.images} productName={product.name} />

            {/* 2. Product Info & Action Card Component */}
            <ProductInfoActions
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              quantity={quantity}
              setQuantity={setQuantity}
              formatCurrency={formatCurrency}
            />
          </div>

          {/* 3. Product Tabs Description Component */}
          <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </main>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
