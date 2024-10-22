// import React from "react";

// interface ImageLink {
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   alt: string;
//   slug: {
//     current: string;
//   };
//   link: string;
// }

// interface DisplayLogoProps {
//   imageLinks: ImageLink[];
// }

// const DisplayLogo: React.FC<DisplayLogoProps> = ({ imageLinks }) => {
//   if (!imageLinks || imageLinks.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex gap-4">
//       {imageLinks.map((imageLink) => (
//         <a
//           key={imageLink.slug.current}
//           href={imageLink.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="transform transition duration-200 hover:scale-110"
//         >
//           <img
//             src={imageLink.image.asset.url}
//             alt={imageLink.alt}
//             width={50}
//             height={50}
//           />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default DisplayLogo;

// import React, { useEffect, useState } from "react";
// import { FetchFooterLogo, ImageLink } from "../import/fetchLogo";

// const DisplayFooterLogo: React.FC = () => {
//   const [imageLinks, setImageLinks] = useState<ImageLink[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await FetchFooterLogo();
//       setImageLinks(data);
//     };

//     fetchData();
//   }, []);

//   if (imageLinks.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex gap-4">
//       {imageLinks.map((imageLink) => (
//         <a
//           key={imageLink.slug.current}
//           href={imageLink.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="transform transition duration-200 hover:scale-110"
//         >
//           <img
//             src={imageLink.image.asset.url}
//             alt={imageLink.alt}
//             width={50}
//             height={50}
//           />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default DisplayFooterLogo;

import React, { useEffect, useState } from "react";
import {
  FetchFooterLogo,
  FetchHeaderLogo,
  ImageLink,
} from "../import/fetchLogo";

const DisplayFooterLogo: React.FC = () => {
  const [imageLinks, setImageLinks] = useState<ImageLink[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchFooterLogo();
      setImageLinks(data);
    };

    fetchData();
  }, []);

  if (imageLinks.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4">
      {imageLinks.map((imageLink) => (
        <a
          key={imageLink.slug.current}
          href={imageLink.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-200 hover:scale-110"
        >
          <img
            src={imageLink.image.asset.url}
            alt={imageLink.alt}
            width={50}
            height={50}
          />
        </a>
      ))}
    </div>
  );
};

const DisplayHeaderLogo: React.FC = () => {
  const [headerLogo, setHeaderLogo] = useState<ImageLink | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchHeaderLogo();
      setHeaderLogo(data);
    };

    fetchData();
  }, []);

  if (!headerLogo) {
    return <div>Loading...</div>;
  }

  return (
    <a href={headerLogo.link}>
      <img
        src={headerLogo.image.asset.url}
        alt={headerLogo.alt}
        width={80}
        height={80}
      />
    </a>
  );
};

export { DisplayFooterLogo, DisplayHeaderLogo };
