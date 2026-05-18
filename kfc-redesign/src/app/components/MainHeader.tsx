"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MapPin, ChevronRight, Search, User, ShoppingBag, X, Bike } from "lucide-react";
import DesktopNav from "./DesktopNav";

export default function MainHeader() {
  // Interactive Panel States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Sizing Data
  const cartCount = 1;
  const cartTotal = 749;

  return (
    <>
      {/* GLOBAL FIXED TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          
          {/* LEFT SIDE FRAME */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-2 lg:hidden hover:bg-gray-50 rounded-full transition"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <Link href="/">
              <span className="text-3xl text-red-600 font-anton tracking-widest italic cursor-pointer select-none">
                KFC
              </span>
            </Link>

            {/* Desktop Link Layout */}
            <DesktopNav />

            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-gray-100 transition cursor-pointer ml-4">
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold truncate max-w-[200px]">
                Delivery to: Connaught Place, New Delhi
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* RIGHT SIDE FRAME */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition hidden sm:block">
              <Search className="w-5 h-5" />
            </button>

            {/* 🎯 LINKED: TRACK ORDER TOP BAR ACTION BUTTON */}
            <Link href="/track" className="hidden sm:block">
              <button className="p-2 hover:bg-gray-50 rounded-full transition text-gray-700 hover:text-red-600" title="Track Live Order">
                <Bike className="w-5 h-5" />
              </button>
            </Link>

            {/* 🎯 LINKED: USER ACCOUNT PROFILE BUTTON */}
            <Link href="/profile" className="hidden sm:block">
              <button className="p-2 hover:bg-gray-50 rounded-full transition text-gray-700 hover:text-red-600" title="My Profile">
                <User className="w-5 h-5" />
              </button>
            </Link>
            
            {/* Shopping Bag Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-full transition"
            >
              <div className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <span className="hidden md:block font-bold text-sm text-gray-900">₹{cartTotal}</span>
            </button>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* HAMBURGER MOBILE MENU (SLIDES LEFT TO RIGHT) */}
      {/* ======================================================== */}
      {/* Backdrop Cover */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Drawer Main Body */}
      <div className={`fixed top-0 left-0 bottom-0 w-72 bg-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-100 h-16">
          <h2 className="text-3xl text-red-600 font-anton tracking-widest italic">KFC</h2>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg mb-6">
            <MapPin className="w-5 h-5 text-red-600 shrink-0" />
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-gray-500 font-bold uppercase">Delivering to</p>
              <p className="text-sm font-semibold truncate">Connaught Place, New Delhi</p>
            </div>
          </div>
          <ul className="space-y-2 font-bold text-lg">
            <Link href="/menu" onClick={() => setIsMenuOpen(false)} className="block">
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between">
                <span>Menu</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </li>
            </Link>
            <Link href="/offers" onClick={() => setIsMenuOpen(false)} className="block">
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between">
                <span>Deals & Offers</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </li>
            </Link>
            
            {/* MOBILE DROPDOWN LINKS */}
            <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="block">
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between">
                <span>Profile</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </li>
            </Link>
            <Link href="/track" onClick={() => setIsMenuOpen(false)} className="block">
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between">
                <span>Track Order</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* ======================================================== */}
      {/* CART DRAWER PANEL (SLIDES RIGHT TO LEFT - PINNED) */}
      {/* ======================================================== */}
      {/* Separate Background Overlay Layer */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      
      {/* Separate Solid Panel Layer - Always fixed right-0 */}
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-100 h-16">
          <h3 className="text-2xl text-red-600 font-anton mt-1">YOUR CART</h3>
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold">{cartCount} Items</span>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex justify-between mb-4 pb-4 border-b border-gray-50">
            <div>
              <h5 className="font-bold text-lg">Ultimate Savings Bucket</h5>
              <p className="text-sm text-gray-500">₹749</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 h-9">
              <button className="text-red-600 font-bold text-lg leading-none">-</button>
              <span className="text-sm font-bold">1</span>
              <button className="text-red-600 font-bold text-lg leading-none">+</button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between mb-4 text-lg">
            <span className="font-bold text-gray-500">Subtotal</span>
            <span className="font-bold">₹{cartTotal}</span>
          </div>
          <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="block w-full">
            <button className="w-full bg-red-600 text-white font-anton uppercase text-xl py-4 hover:bg-[#b60020] transition rounded-md shadow-lg shadow-red-500/20">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
