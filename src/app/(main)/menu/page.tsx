"use client";

import { useState } from "react";
import { Plus, ShoppingBag } from "lucide-react";

export default function MenuPage() {
  // Sets the default starting category to 'bestsellers'
  const [activeTab, setActiveTab] = useState("bestsellers");

  const categories = [
    { id: "bestsellers", name: "Bestsellers" },
    { id: "burgers", name: "Burgers" },
    { id: "chicken", name: "Chicken Buckets" },
    { id: "rice", name: "Rice Bowls" },
    { id: "snacks", name: "Snacks" },
    { id: "beverages", name: "Beverages" },
  ];

  // 📂 DATA STRUCTURE: Grouped by Category ID keys matching categories list above
  const menuData: Record<string, Array<{ id: number; name: string; desc: string; price: number; image: string; tag?: string }>> = {
    bestsellers: [
      {
        id: 101,
        name: "Ultimate Savings Bucket",
        desc: "Save 30% on 4pc Hot & Crispy, 6 Hot Wings, 4 Strips, 2 Dips & Pepsi",
        price: 749,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop",
        tag: "Best Seller",
      },
      {
        id: 102,
        name: "Zinger Burger",
        desc: "Signature chicken burger with crunchy fillet, veggies & spicy mayo",
        price: 199,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
        tag: "Top Rated",
      },
    ],
    burgers: [
      {
        id: 201,
        name: "Classic Zinger Burger",
        desc: "Signature chicken burger with crunchy fillet, lettuce & dynamic creamy mayo",
        price: 199,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 202,
        name: "Double Tacker Zinger",
        desc: "Two crunchy chicken fillets with double cheese layers and fresh crisp greens",
        price: 329,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
        tag: "Huge",
      },
      {
        id: 203,
        name: "Veggie Premium Crunch",
        desc: "Crisp potato patty with dynamic spices, fresh onions, tomatoes and dressing",
        price: 149,
        image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=600&auto=format&fit=crop",
      },
    ],
    chicken: [
      {
        id: 301,
        name: "Hot & Crispy Bucket (8pc)",
        desc: "8 pieces of our legendary signature crispy golden fried chicken",
        price: 849,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop",
        tag: "Sharing",
      },
      {
        id: 302,
        name: "Peri Peri Strips (6pc)",
        desc: "Spicy & crunchy chicken strips with a heavy dust kick of peri peri sprinkle",
        price: 279,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop",
        tag: "Spicy",
      },
    ],
    rice: [
      {
        id: 401,
        name: "Popcorn Chicken Rice Bowl",
        desc: "Spiced butter rice gravy mix loaded with crunchy signature chicken bites",
        price: 219,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
      },
    ],
    snacks: [
      {
        id: 501,
        name: "Large Golden French Fries",
        desc: "Perfectly cut potato fries crisped to golden excellence with salt dusting",
        price: 119,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop",
      },
    ],
    beverages: [
      {
        id: 601,
        name: "Pepsi Zoom Can (330ml)",
        desc: "Chilled carbonated refreshing soft drink can to complete the meal layout",
        price: 60,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
      },
    ],
  };

  // 🔍 DYNAMIC FILTER: Pulls items matching active category or falls back to empty array if none
  const activeMenuItems = menuData[activeTab] || [];

  return (
    <main className="min-h-screen bg-[#f9f9f9]">

      
 

        


         
      
      {/* RESPONSIVE LAYOUT CONTAINER */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row px-4 md:px-8 py-6 gap-8">
        
        {/* 1. CATEGORY SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 h-fit bg-white lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-gray-100 p-2 lg:p-0 shadow-sm lg:shadow-none">
          <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar lg:overflow-visible pb-2 lg:pb-0">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`whitespace-nowrap px-4 py-3 font-bold uppercase text-xs md:text-sm tracking-wide text-left transition-all rounded-lg flex items-center border-b-2 lg:border-b-0 lg:border-l-4 ${
                    isSelected
                      ? "border-red-600 lg:border-red-600 bg-red-50/50 lg:bg-white text-red-600"
                      : "border-transparent lg:border-transparent text-gray-500 hover:text-black hover:bg-gray-50/80"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </aside>

        {/* 2. FOOD ITEMS GRID CONTENT */}
        <section className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 mb-6 uppercase">
            {categories.find((c) => c.id === activeTab)?.name || activeTab}
          </h1>

          {/* Fallback layout state if a menu list category is empty */}
          {activeMenuItems.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
              <p className="text-gray-400 font-medium">No items available in this layout category yet.</p>
            </div>
          ) : (
            /* Layout responsive grid (2 columns on mobile/desktop as requested) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeMenuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col sm:flex-row group hover:shadow-md transition-shadow duration-300"
                >
                  {/* Product Image Panel */}
                  <div className="w-full sm:w-44 h-44 sm:h-auto relative overflow-hidden bg-gray-50 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide rounded-sm shadow-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Product Info Panel */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1 line-clamp-1">{item.name}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-2">
                      <span className="font-extrabold text-base md:text-lg text-gray-900">₹{item.price}</span>
                      <button className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-red-700 active:scale-98 transition-all shadow-sm shadow-red-600/10">
                        <span>Add</span>
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

      {/* 3. STICKY MOBILE BOTTOM FLOATING CART BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 text-white px-4 py-3 flex items-center justify-between md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.15)] animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="relative bg-white/20 p-2 rounded-lg">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">2</span>
          </div>
          <div>
            <p className="text-xs font-bold text-red-100">2 Items Added</p>
            <p className="text-sm font-black">₹748</p>
          </div>
        </div>
        <button className="bg-white text-red-600 font-bold text-xs uppercase px-4 py-2 rounded-md transition active:scale-95">
          View Cart
        </button>
      </div>
    </main>
  );
}