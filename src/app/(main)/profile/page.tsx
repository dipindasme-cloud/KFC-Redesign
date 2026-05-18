"use client";

import React from "react";
import { User, Mail, Phone, MapPin, ShoppingBag, ChevronRight, LogOut, Clock } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  // Mock User Account Data
  const userProfile = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    savedAddress: "Flat 4B, Skyview Apartments, MG Road, Ernakulam, Kerala - 682016",
  };

  // Mock Past Order History Data
  const orderHistory = [
    { id: "KFC-98431", date: "May 15, 2026", total: 792, status: "Delivered", items: "Classic Chicken Bucket (8 Pcs) × 1" },
    { id: "KFC-97210", date: "May 02, 2026", total: 349, status: "Delivered", items: "Mingles Bucket × 1" },
  ];

  return (
    <main className="w-full bg-[#f9f9f9] min-h-screen text-gray-900 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* PAGE TYPOGRAPHY HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-anton uppercase tracking-wide">My Account</h1>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Manage your details & review past orders</p>
        </div>

        {/* 2-COLUMN STRUCTURE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT FRAMING COMPONENT: ACCOUNT DETAILS FORM (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-5">
              
              <div className="flex items-center gap-4 pb-4 border-b border-gray-50">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-anton">
                  RS
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{userProfile.name}</h2>
                  <span className="text-[10px] bg-red-50 text-red-600 font-black uppercase px-2 py-0.5 rounded-sm tracking-wider">Premium Crunch Member</span>
                </div>
              </div>

              {/* READONLY DETAILS ROWS */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</span>
                    <span className="font-medium text-gray-800">{userProfile.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Mobile Phone</span>
                    <span className="font-medium text-gray-800">{userProfile.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Primary Delivery Address</span>
                    <span className="font-medium text-gray-800 leading-relaxed">{userProfile.savedAddress}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-2 flex items-center justify-center gap-2 border border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-500 font-bold uppercase text-xs tracking-wider py-3.5 rounded-lg transition-colors">
                <LogOut className="w-4 h-4" />
                <span>Sign Out of Account</span>
              </button>

            </div>
          </div>

          {/* RIGHT FRAMING COMPONENT: PAST HISTORY TIMELINE (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">Order History Pipeline</h3>
            
            <div className="flex flex-col gap-4">
              {orderHistory.map((order) => (
                <div key={order.id} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-400 shrink-0">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-anton text-sm uppercase tracking-wide">{order.id}</span>
                        <span className="text-[10px] font-bold text-gray-400">• {order.date}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-500 mt-1">{order.items}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-2 bg-emerald-50 px-2 py-0.5 rounded-sm">
                        ● {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-0 border-gray-50">
                    <div className="flex flex-col sm:items-end">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Total Spent</span>
                      <span className="font-anton text-lg text-gray-900">₹{order.total}</span>
                    </div>
                    <Link href="/track">
                      <button className="flex items-center gap-1.5 bg-gray-900 hover:bg-red-600 text-white font-anton uppercase text-xs tracking-wider px-4 py-2.5 rounded-md transition-colors group">
                        <span>Track</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}