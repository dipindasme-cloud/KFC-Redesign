"use client";

import React, { useState, useEffect } from "react";
import { MapPin, CreditCard, ShoppingBag, ShieldCheck, ArrowLeft, ChevronRight, CheckCircle2, Loader2, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  
  // ⚡ APPLICATION TRANSACTIONS STATE
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showNotification, setShowNotification] = useState(false);

  // Automated countdown system for Home Page redirect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isSuccess && countdown === 0) {
      router.push("/"); // Bounces back to Homepage
    }
    return () => clearTimeout(timer);
  }, [isSuccess, countdown, router]);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate API network validation delay (2 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setShowNotification(true);
      
      // Dismiss top notification box automatically after 4 seconds
      setTimeout(() => setShowNotification(false), 4000);
    }, 2000);
  };

  // Your exact original mock items state
  const cartItems = [
    { id: 1, name: "Classic Chicken Bucket (8 Pcs)", qty: 1, price: 699 },
    { id: 2, name: "Zinger Burger Pro Max", qty: 2, price: 378 },
  ];

  const subtotal = 1077;
  const gstTax = 54;
  const deliveryFee = 39;
  const totalAmount = subtotal + gstTax + deliveryFee;

  return (
    <main className="w-full bg-[#f9f9f9] min-h-screen text-gray-900 py-10 px-4 md:px-8 relative">
      
      {/* 🔔 1. SYSTEM TOP NOTIFICATION TOAST BAR */}
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-32px)] max-w-sm bg-gray-900 text-white rounded-xl shadow-2xl p-4 border border-white/10 flex items-start gap-3 transition-all duration-500 ease-out transform ${showNotification ? "translate-y-0 opacity-100 scale-100" : "-translate-y-12 opacity-0 scale-95 pointer-events-none"}`}>
        <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
          <Bell className="w-4 h-4 animate-bounce" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400">Order Confirmed</span>
            <span className="text-[10px] text-gray-500 font-bold">Just Now</span>
          </div>
          <p className="text-xs font-medium text-gray-300 mt-0.5">₹{totalAmount} debited successfully. Your order is inside our kitchen pipeline!</p>
        </div>
      </div>

      {/* 🟢 2. GPAY STYLE FULL SCREEN CONGRATS OVERLAY */}
      {isSuccess && (
        <div className="fixed inset-0 bg-[#f9f9f9] z-50 flex flex-col items-center justify-center p-6 transition-all">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-32 h-32 bg-emerald-500/10 rounded-full animate-ping duration-1000" />
            <div className="absolute w-24 h-24 bg-emerald-500/20 rounded-full animate-pulse" />
            <div className="relative p-5 bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-16 h-16 stroke-[1.5]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-anton text-black uppercase tracking-wide mb-2 text-center">
            Order Placed <br />Successfully!
          </h2>
          
          <p className="text-gray-400 text-xs md:text-sm max-w-xs text-center font-medium leading-relaxed mb-10">
            Payment verified securely. Your fresh chicken will arrive at your destination coordinates shortly.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-400">
            <span>Navigating Home in</span>
            <span className="text-red-500 text-xs font-black px-1.5 py-0.5 bg-red-500/10 rounded-sm">{countdown}s</span>
          </div>
        </div>
      )}

      {/* ======================= RESTORED PRIMARY 2-COLUMN VIEW SYSTEM ======================= */}
      <div className="max-w-7xl mx-auto w-full">
        
        {/* DISTRACTION-FREE SECURE BRAND HEADER */}
        <div className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-4xl font-anton tracking-wider text-red-600">
              KFC
            </div>
            <Link href="/menu" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-red-600 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Cancel & Exit</span>
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-anton uppercase tracking-wide mt-2">Secure Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================= LEFT COLUMN: THE FORMS (8 COLS) ======================= */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            
            {/* CARD 1: DELIVERY ADDRESS INPUT GROUPS */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-wide">1. Delivery Location</h3>
                  <p className="text-xs text-gray-400 font-medium">Where should we deliver your hot food?</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Complete Address</label>
                  <input type="text" placeholder="Flat/House No, Floor, Building Name, Street Area" className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all" />
                </div>
              </div>
            </div>

            {/* CARD 2: PAYMENT METHOD CHOICE SELECTOR */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-wide">2. Choose Payment Mode</h3>
                  <p className="text-xs text-gray-400 font-medium">Select your preferred payment ecosystem channel</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {/* UPI */}
                <label onClick={() => setPaymentMethod("upi")} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === "upi" ? "border-red-600 bg-red-50/20 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === "upi"} readOnly className="accent-red-600 w-4 h-4" />
                    <div>
                      <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">Instant UPI</p>
                      <p className="text-xs text-gray-400 font-medium">Pay securely via GPay, PhonePe, or Paytm</p>
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase text-red-600 tracking-wider bg-red-50 px-2 py-0.5 rounded-sm">Popular</span>
                </label>

                {/* COD */}
                <label onClick={() => setPaymentMethod("cod")} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === "cod" ? "border-red-600 bg-red-50/20 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked={paymentMethod === "cod"} readOnly className="accent-red-600 w-4 h-4" />
                    <div>
                      <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">Cash On Delivery (COD)</p>
                      <p className="text-xs text-gray-400 font-medium">Pay in cash or card when your rider arrives</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* ======================= RIGHT COLUMN: STICKY STYLED SUMMARY SIDEBAR (4 COLS) ======================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 w-full flex flex-col gap-4">
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-50">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-400">Review Your Order</h4>
              </div>

              {/* Your clean itemized grid list loops perfectly here */}
              <div className="flex flex-col gap-4 divide-y divide-gray-50">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between pt-3 first:pt-0 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-800 leading-tight">{item.name}</span>
                      <span className="text-xs text-gray-400 font-medium mt-0.5">Quantity: {item.qty}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-50 text-xs font-medium text-gray-500">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="text-gray-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant GST Tax (5%)</span>
                  <span className="text-gray-800">₹{gstTax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Surge Fee</span>
                  <span className="text-gray-800">₹{deliveryFee}</span>
                </div>
                
                <div className="flex justify-between pt-3 mt-1 border-t border-dashed border-gray-100 text-base font-anton text-gray-900 uppercase tracking-wide">
                  <span>Grand Total</span>
                  <span className="text-red-600">₹{totalAmount}</span>
                </div>
              </div>

              {/* 🎯 SUBMIT ACTION ACCELERATOR WITH INTERACTIVE LOADING STATES */}
              <button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:scale-98 disabled:bg-gray-200 disabled:text-gray-400 disabled:scale-100 text-white font-anton uppercase text-sm tracking-wider py-4 rounded-lg transition-all duration-200 shadow-lg shadow-red-600/10 group"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Authorizing Transaction...</span>
                  </>
                ) : (
                  <>
                    <span>Place Your Order</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100/60 rounded-xl text-[11px] text-gray-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit Encrypted Secure Server Connection</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}