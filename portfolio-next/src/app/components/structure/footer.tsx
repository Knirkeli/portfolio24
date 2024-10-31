"use client";
import React from "react";
import { DisplayFooterLogo } from "./logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-between items-center p-4 text-black">
      <div className="flex gap-4"></div>
      <DisplayFooterLogo />
      <p className="text-base">&reg; Knirkefri design</p>
    </footer>
  );
};

export default Footer;
