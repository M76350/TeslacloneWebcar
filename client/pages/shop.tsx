import CardGallery from "@/components/CardGallery";
import React from "react";
// import CardGallery from "../components/CardGallery";

const ShopPage: React.FC = () => {
  return (
    <main className="min-h-screen p-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <CardGallery />
    </main>
  );
};

export default ShopPage;
