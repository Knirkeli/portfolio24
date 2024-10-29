"use client";
import React from "react";
import Image from "next/image";
const Cover = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/cover.png"
        alt="Cover Image for testing"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          {" "}
          <span className="bg-gradient-to-r from-gray-400 to-amber-400 bg-clip-text text-transparent">
            Knirkefri
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
            design
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Cover;
