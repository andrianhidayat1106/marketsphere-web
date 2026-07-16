import { useState } from "react";
import FilterSidebar from "./component/FilterSidebar.jsx";
import ProductList from "./component/ProductList.jsx";
import { formatRupiah } from "../../../utils/formatCurrency.js";

/**
 * ListProductPage
 * Navbar & Footer sudah di-handle oleh MainLayout.
 */
const ListProductPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { name: "Electronics", count: 1452, active: true },
    { name: "Smartphones", parent: "Electronics" },
    { name: "Laptops & Computers", parent: "Electronics" },
    { name: "Audio & Wearables", parent: "Electronics" },
    { name: "Home Appliances", count: 850 },
    { name: "Fashion & Accessories", count: 2100 },
    { name: "Health & Beauty", count: 1200 },
  ];

  const products = [
    {
      id: 1,
      name: "TechPro X200 Smartphone 5G 128GB - Global ROM Midnight Black",
      price: 7485000,
      rating: 4.9,
      reviews: "1.2k",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
      location: "Singapore",
      tag: "SALE",
      discount: "15%",
    },
    {
      id: 2,
      name: "Zenith Noise Cancelling Wireless Headphones - Carbon Grey",
      price: 1942500,
      rating: 4.7,
      reviews: "840",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      location: "Malaysia",
    },
    {
      id: 3,
      name: 'Quantum Book Pro 14" Thin & Light Laptop 16GB RAM',
      price: 13485000,
      rating: 4.9,
      reviews: "2.1k",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
      location: "Global",
      tag: "TOP RATED",
    },
    {
      id: 4,
      name: "Nexa Watch Series 5 Smartwatch Fitness Tracker",
      price: 1275000,
      rating: 4.6,
      reviews: "450",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      location: "Singapore",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-4 pb-20">
      <div className="grid grid-cols-12 gap-8">
        <FilterSidebar categories={categories} />
        <ProductList
          products={products}
          viewMode={viewMode}
          setViewMode={setViewMode}
          formatCurrency={formatRupiah}
        />
      </div>
    </main>
  );
};

export default ListProductPage;
