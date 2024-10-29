"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
 
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Your OPINIONS
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/download.png`}
          alt="hero"
          height={720}
          width={1080}
          className="mx-auto rounded-2xl object-cover h-full "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}