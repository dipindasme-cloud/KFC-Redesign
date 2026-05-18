"use client";
// 🎯 FIX 1: Corrected the Link import so it routes pages properly!
import Link from "next/link"; 
import { Link as LinkIcon, Plus } from "lucide-react";

export default function Home() {
  const menuItems = [
    {
      id: 1,
      name: "Ultimate Savings Bucket",
      desc: "Save 30% on 4pc Hot & Crispy, 6 Hot Wings, 4 Strips, 2 Dips & Pepsi",
      price: 749,
      image: "/kfc_bucket.png",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Zinger Burger",
      desc: "Signature chicken burger with crunchy fillet, veggies & spicy mayo",
      price: 199,
      image: "/zinger_burger.png",
    },
    {
      id: 3,
      name: "Peri Peri Strips (3pc)",
      desc: "Spicy & crunchy chicken strips with a kick of peri peri",
      price: 149,
      image: "/chicken_strips.png",
      tag: "Spicy",
    },
    {
      id: 4,
      name: "Mingles Bucket",
      desc: "4 Hot Wings, 2 Chicken Strips, Reg Popcorn & 2 Dips",
      price: 349,
      image: "/mingles_bucket.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f9f9] relative overflow-x-hidden">
      
      <div className="w-full max-w-7xl mx-auto">
        {/* HERO */}
        <section className="px-4 md:px-6 lg:px-8 xl:px-10 py-6">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-lg shadow-red-500/10">
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2065&auto=format&fit=crop" 
              alt="Hero Promo" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-6 md:px-12">
              <div className="w-fit flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded-sm text-xs font-black uppercase tracking-wider mb-4 animate-pulse">
                <span>New Launch</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl text-white font-anton mb-2 max-w-md leading-tight">CRUNCHY <br className="hidden md:block"/>CHICKEN ROLL</h2>
              <p className="text-gray-200 mb-6 text-sm md:text-base max-w-sm">Loaded with dynamic flavors and our signature crunch. Get it now at just ₹99.</p>
              
              {/* 🎯 FIX 2: Using the correct Next.js Link component with full display block properties */}
              <Link href="/checkout" className="block w-fit">
                <button className="bg-white text-black font-anton uppercase px-8 py-3 text-lg hover:bg-red-600 hover:text-white transition-colors duration-200 active:scale-98">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* BESTSELLER LIST */}
        <section className="px-4 md:px-6 lg:px-8 xl:px-10 py-4">
          <h3 className="text-3xl mb-6 tracking-wide">BESTSELLERS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(32,33,36,0.04)] flex hover:shadow-lg transition flex-col sm:flex-row group border border-gray-50">
                <div className="w-full sm:w-48 h-48 sm:h-auto relative overflow-hidden bg-gray-100 shrink-0">
                  <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  {item.tag && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">{item.tag}</span>
                  )}
                </div>
                <div className="p-4 sm:p-5 flex flex-col justify-between w-full flex-1">
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-lg">₹{item.price}</span>
                    <button className="flex items-center justify-center gap-1 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#b60020] transition hover:-translate-y-0.5 active:translate-y-0">
                      <span>Add</span>
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* OFFERS (Snap Scroll) */}
        <section className="px-4 md:px-6 lg:px-8 xl:px-10 py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl">Exclusive Offers</h3>
            <button className="text-sm text-primary font-bold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-[#202124] text-white p-5 rounded-xl snap-start flex flex-col justify-between">
                <div>
                  <h4 className="text-xl text-primary mb-1">UPTO ₹100 OFF</h4>
                  <p className="text-sm text-gray-400">On orders above ₹599. Code: CRUNCH100</p>
                </div>
                <button className="mt-4 border border-gray-600 rounded-full px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black transition">
                  Apply Offer
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      
    </main>
  );
}