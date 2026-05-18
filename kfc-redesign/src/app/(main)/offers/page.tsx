"use client";

import { useState } from "react";
import { Search, Gift, Tag, Copy, Check, Clock } from "lucide-react";

interface Offer {
  id: number;
  code: string;
  title: string;
  desc: string;
  minOrder: number;
  expiry: string;
  image: string;
  category: string;
}

const offers: Offer[] = [
  {
    id: 1,
    code: "FREECHICKEN",
    title: "Free 2pc Hot & Crispy Chicken",
    desc: "Get 2 pieces of our legendary signature hot & crispy chicken absolutely free on orders above ₹499.",
    minOrder: 499,
    expiry: "Valid till 31st May",
    image: "/kfc_bucket.png",
    category: "freebies",
  },
  {
    id: 2,
    code: "CRUNCH100",
    title: "Upto ₹100 Instant Discount",
    desc: "Get flat 15% off up to ₹100 on your order. Coupon valid on all menu items.",
    minOrder: 399,
    expiry: "Valid till 31st May",
    image: "/zinger_burger.png",
    category: "discounts",
  },
  {
    id: 3,
    code: "STRIPSDEAL",
    title: "Buy 3pc Strips, Get 3pc Free!",
    desc: "Double the crunch! Add 3pc Peri Peri Strips to your cart and apply this code to get another 3pc free.",
    minOrder: 299,
    expiry: "Valid till 30th May",
    image: "/chicken_strips.png",
    category: "bogo",
  },
  {
    id: 4,
    code: "BUCKET300",
    title: "Flat ₹300 Off on Buckets",
    desc: "Treat the whole family! Get flat ₹300 off on any of our sharing buckets with order value above ₹1199.",
    minOrder: 1199,
    expiry: "Valid till 15th June",
    image: "/mingles_bucket.png",
    category: "buckets",
  },
  {
    id: 5,
    code: "FREEDELIVERY",
    title: "Free Delivery on All Orders",
    desc: "Craving KFC at home? Apply code and pay zero delivery charges on your order.",
    minOrder: 199,
    expiry: "Valid till 31st May",
    image: "/zinger_burger.png",
    category: "discounts",
  },
  {
    id: 6,
    code: "BINGE50",
    title: "Flat 50% Off on Mingles Bucket",
    desc: "Weekend special! Enjoy 50% off on our bestselling Mingles Bucket. Limited time only.",
    minOrder: 599,
    expiry: "Valid till 25th May",
    image: "/mingles_bucket.png",
    category: "buckets",
  }
];

const categories = [
  { id: "all", name: "All Offers" },
  { id: "discounts", name: "Discounts" },
  { id: "buckets", name: "Bucket Deals" },
  { id: "freebies", name: "Freebies" },
  { id: "bogo", name: "Buy 1 Get 1" },
];

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [appliedId, setAppliedId] = useState<number | null>(null);

  const handleCopyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleApplyOffer = (id: number) => {
    setAppliedId(id);
    setTimeout(() => setAppliedId(null), 2500);
  };

  // Filter logic
  const filteredOffers = offers.filter((offer) => {
    const matchesCategory = activeTab === "all" || offer.category === activeTab;
    const matchesSearch = 
      offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f9f9f9] py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HERO BANNER SECTION */}
        <section className="relative bg-[#202124] text-white rounded-2xl overflow-hidden mb-10 shadow-lg shadow-black/10">
  
  {/* 📸 BACKGROUND IMAGE LAYER */}
  <img 
    src="/1.png" // Change this to your actual file path in the public folder
    alt="Delicious Fried Chicken Background" 
    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
  />

  {/* 🖤 DARK OVERLAY SHIELD (For Text Contrast and Hierarchy) */}
  {/* bg-black/70 creates a 70% opacity dark layer over the image */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />
  
  {/* CONTAINER WITH HIGHER Z-INDEX */}
  {/* We changed z-10 to relative z-10 to force the text to float safely above the image layer */}
  <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 max-w-2xl">
    
    <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-red-600 rounded-sm text-xs font-black uppercase tracking-wider mb-4 animate-pulse">
      <Gift className="w-3.5 h-3.5" />
      <span>Exclusive Rewards</span>
    </div>
    
    <h1 className="text-4xl md:text-5xl font-anton tracking-wide mb-3 leading-tight uppercase">
      KFC DEALS & <br className="hidden sm:inline" />OFFERS
    </h1>
    
    <p className="text-gray-300 text-sm md:text-base mb-0 leading-relaxed font-medium">
      Finger lickin&apos; good deals tailored just for you. Apply these promo codes to unlock massive savings on your favorite buckets, burgers, and snacks.
    </p>
    
  </div>
</section>

        {/* SEARCH AND FILTER BAR */}
        <section className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 shrink-0">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`whitespace-nowrap px-4 py-2.5 font-bold uppercase text-xs md:text-sm tracking-wider rounded-full transition-all border ${
                    isSelected
                      ? "bg-red-600 border-red-600 text-white shadow-sm shadow-red-600/10"
                      : "bg-white border-gray-200 text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search coupons, codes, or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all shadow-sm shadow-black/5"
            />
          </div>
        </section>

        {/* OFFERS GRID */}
        {filteredOffers.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center shadow-sm max-w-lg mx-auto mt-12">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-2">No Offers Found</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We couldn&apos;t find any offers matching your search. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="bg-red-600 text-white font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-red-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOffers.map((offer) => {
              const isCopied = copiedId === offer.id;
              const isApplied = appliedId === offer.id;
              return (
                <div
                  key={offer.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row group"
                >
                  {/* Left: Food Image Thumbnail */}
                  <div className="w-full md:w-48 h-48 md:h-auto relative overflow-hidden bg-gray-50 shrink-0">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 md:hidden" />
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                      {offer.category === "bogo" ? "BOGO" : offer.category}
                    </span>
                  </div>

                  {/* Right: Content details */}
                  <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-red-600" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600">
                          Promo Coupon
                        </span>
                      </div>
                      <h3 className="font-extrabold text-lg md:text-xl text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {offer.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                        {offer.desc}
                      </p>
                    </div>

                    <div className="mt-auto">
                      {/* Expiry and Min Order */}
                      <div className="flex flex-wrap gap-4 items-center justify-between text-xs font-semibold text-gray-400 pb-4 mb-4 border-b border-gray-50">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>{offer.expiry}</span>
                        </div>
                        <div>
                          <span>Min. Order: ₹{offer.minOrder}</span>
                        </div>
                      </div>

                      {/* Action Bar (Code & Redeem) */}
                      <div className="flex items-center gap-3">
                        {/* Promo Code Box */}
                        <div 
                          onClick={() => handleCopyCode(offer.id, offer.code)}
                          className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 border-dashed rounded-lg px-4 py-2.5 cursor-pointer hover:bg-gray-100/50 hover:border-gray-300 transition-all flex-1"
                        >
                          <code className="text-sm font-black font-mono tracking-wider text-gray-800">
                            {offer.code}
                          </code>
                          <button className="text-gray-400 hover:text-red-600 transition">
                            {isCopied ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Redeem/Apply Button */}
                        <button
                          onClick={() => handleApplyOffer(offer.id)}
                          disabled={isApplied}
                          className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm ${
                            isApplied 
                              ? "bg-green-600 text-white" 
                              : "bg-red-600 text-white hover:bg-red-700 active:scale-98 shadow-red-600/10"
                          }`}
                        >
                          {isApplied ? "Applied!" : "Redeem"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PROMO TOASTS CONTAINER */}
        {copiedId && (
          <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-black text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg shadow-xl animate-fade-in flex items-center gap-2 border border-white/10">
            <Check className="w-4 h-4 text-green-500" />
            <span>Code Copied to Clipboard!</span>
          </div>
        )}

        {appliedId && (
          <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-green-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg shadow-xl animate-fade-in flex items-center gap-2">
            <Check className="w-4 h-4 text-white" />
            <span>Coupon Code Applied!</span>
          </div>
        )}

      </div>
    </main>
  );
}
