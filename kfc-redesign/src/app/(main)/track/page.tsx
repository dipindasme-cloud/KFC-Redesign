"use client";

import React from "react";
import { Bike, ChefHat, CheckCircle2, Clock, ShieldCheck, PhoneCall, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TrackOrderPage() {
  // Current active operational level indicator (1 to 4)
  const currentStep = 3; 

  const trackingStages = [
    { level: 1, name: "Order Confirmed", summary: "Payment cleared and authorized by banking gateway.", icon: CheckCircle2 },
    { level: 2, name: "In The Kitchen", summary: "Your fresh chicken is hitting our high-pressure fryers.", icon: ChefHat },
    { level: 3, name: "Out For Delivery", summary: "Your golden crisp bucket is inside the rider's thermal box.", icon: Bike },
    { level: 4, name: "Arrived at Destination", summary: "Enjoy your hot, finger lickin' good meal!", icon: ShieldCheck },
  ];

  return (
    <main className="w-full bg-[#f9f9f9] min-h-screen text-gray-900 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* BACK TO DASHBOARD NAVIGATION BAR */}
        <div className="mb-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-anton uppercase tracking-wide">Track Live Order</h1>
              <p className="text-xs text-gray-400 font-medium">ID Reference: <span className="font-bold text-gray-600">KFC-98431</span></p>
            </div>
            
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-lg shrink-0">
              <Clock className="w-4 h-4 animate-spin [animation-duration:10s]" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-wider opacity-70">Estimated Arrival</span>
                <span className="text-xs font-black uppercase tracking-wide">18 Mins Left</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN PIPELINE FRAME SECTION */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-2">
          
          {/* TRACKING STAGES MAPPED ITERATIVELY */}
          {trackingStages.map((stage, idx) => {
            const IconComponent = stage.icon;
            const isCompleted = stage.level < currentStep;
            const isActive = stage.level === currentStep;
            const isLast = idx === trackingStages.length - 1;

            return (
              <div key={stage.level} className="flex gap-4 group">
                
                {/* VERTICAL NODE TIMELINE AXIS PIPES */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isCompleted ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10" :
                    isActive ? "bg-red-600 text-white shadow-md shadow-red-600/20 animate-pulse" :
                    "bg-gray-100 text-gray-400"
                  }`}>
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  
                  {/* Vertical Line Connector Pipe */}
                  {!isLast && (
                    <div className={`w-0.5 h-16 transition-colors ${
                      isCompleted ? "bg-emerald-500" : "bg-gray-100"
                    }`} />
                  )}
                </div>

                {/* TEXT BOUNDARY BOX CONTENT DESCRIPTION */}
                <div className="pt-1.5 pb-6">
                  <h4 className={`text-base font-black uppercase tracking-wide transition-colors ${
                    isActive ? "text-red-600" : isCompleted ? "text-gray-800" : "text-gray-400"
                  }`}>
                    {stage.name}
                  </h4>
                  <p className={`text-xs font-medium leading-relaxed mt-0.5 max-w-md ${
                    isActive || isCompleted ? "text-gray-500" : "text-gray-300"
                  }`}>
                    {stage.summary}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* 📞 RIDER CONTACT FLOATING PROFILE PLATES */}
        <div className="bg-gray-900 rounded-xl text-white p-4 mt-6 flex items-center justify-between shadow-lg shadow-black/5 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-500 font-anton text-sm shrink-0">
              KFC
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Your Delivery Executive</p>
              <h5 className="text-sm font-bold text-white tracking-wide">Anand Kumar</h5>
            </div>
          </div>
          
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-anton uppercase text-xs tracking-wider px-4 py-3 rounded-lg transition-colors active:scale-98">
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Call Rider</span>
          </button>
        </div>

      </div>
    </main>
  );
}