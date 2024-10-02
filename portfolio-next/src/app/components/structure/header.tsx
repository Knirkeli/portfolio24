"use client";
import React from "react";
import FetchLogo from "../import/fetchLogo";
import { DisplayHeaderLogo } from "./logo";

const Header: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-4">
        <DisplayHeaderLogo />
        <h3>Knirkefri design</h3>
      </div>
      <h1>Eirik Kirkeli</h1>
      <p className="text-base">&reg; Knirkefri design</p>
    </footer>
  );
};

export default Header;
