// "use client";
// import React from "react";
// import { DisplayHeaderLogo } from "./logo";

// const Header: React.FC = () => {
//   return (
//     <header className="flex items-center space between p-4 bg-gray-800 text-white">
//       <div className="">
//         <DisplayHeaderLogo />
//       </div>
//       <div>
//         <h1>Knirkefri Design</h1>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import React from "react";
import { DisplayHeaderLogo } from "./logo";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-inherit text-white">
      <div className="mr-auto ml-4">
        <DisplayHeaderLogo />
      </div>
      <div className="flex-1 flex justify-center">
        <h1 className="text-center text-3xl">
          <span className="bg-gradient-to-r from-gray-400 to-amber-400 bg-clip-text text-transparent">
            Knirkefri
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
            design
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
