"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Real-Time Market Insights",
    description:
      "Stay ahead of the curve with our real-time market insights. Our platform provides up-to-the-minute data on market trends, allowing you to make informed decisions quickly. Whether you're a seasoned trader or just starting out, our insights will help you navigate the complex world of opinion trading.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-time market data visualization"
        />
      </div>
    ),
  },
  {
    title: "Diverse Opinion Markets",
    description:
      "Explore a wide range of opinion markets covering politics, entertainment, sports, and more. Our platform offers diverse trading opportunities, allowing you to leverage your knowledge and insights across various fields. Engage in markets that interest you and potentially profit from your predictions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Diverse opinion markets visualization"
        />
      </div>
    ),
  },
  {
    title: "Risk Management Tools",
    description:
      "Take control of your trading with our advanced risk management tools. Set stop-losses, manage your portfolio exposure, and use our analytical tools to assess potential risks and rewards. Our platform empowers you to trade confidently while keeping your risk in check.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Risk management tools illustration"
        />
      </div>
    ),
  },
  {
    title: "Social Trading Features",
    description:
      "Connect with fellow traders, share insights, and learn from the best. Our social trading features allow you to follow successful traders, copy their strategies, and engage in discussions about market trends. Build your network and enhance your trading skills through collaborative learning.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Social trading network illustration"
        />
      </div>
    ),
  },
];
export function List() {
  return (
    <div className="h-screen w-full">
      <StickyScroll content={content} />
    </div>
  );
}
