// "use client";
// import React from "react";
// import Image from "next/image";
// const Cover = () => {
//   return (
//     <div className="relative w-full h-screen">
//       <Image
//         src="/images/cover.png"
//         alt="Cover Image for testing"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-white text-4xl font-bold">
//           {" "}
//           <span className="bg-gradient-to-r from-gray-400 to-amber-400 bg-clip-text text-transparent">
//             Knirkefri
//           </span>{" "}
//           <span className="bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
//             design
//           </span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Cover;
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Cover = () => {
  const touchStartY = useRef<number | null>(null);
  const [initialScrollDone, setInitialScrollDone] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0 && !initialScrollDone) {
        scrollToMainContent();
        setInitialScrollDone(true);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current !== null && !initialScrollDone) {
        const touchEndY = event.changedTouches[0].clientY;
        if (touchStartY.current > touchEndY) {
          scrollToMainContent();
          setInitialScrollDone(true);
        }
        touchStartY.current = null;
      }
    };

    const scrollToMainContent = () => {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleScrollTop = () => {
      if (window.scrollY === 0) {
        setInitialScrollDone(false);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [initialScrollDone]);

  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/cover.png"
        alt="Cover Image for testing"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50 shadow"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
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
