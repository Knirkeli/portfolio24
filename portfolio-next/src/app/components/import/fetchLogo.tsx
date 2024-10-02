// // src/components/fetchLogo.tsx

// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: "2rar6jsc", // Replace with your Sanity project ID
//   dataset: "production", // Replace with your dataset name
//   useCdn: true, // `false` if you want to ensure fresh data
// });

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

// const FetchLogo: React.FC = () => {
//   const [imageLinks, setImageLinks] = useState<ImageLink[]>([]);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "imagesLink" && slug.current in ["instagram", "github", "linkedin"]]{
//           image{
//             asset->{
//               url
//             }
//           },
//           alt,
//           slug,
//           link
//         }`
//       )
//       .then((data) => setImageLinks(data))
//       .catch(console.error);
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

// export default FetchLogo;

// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import DisplayLogo from "../structure/logo";

// const client = createClient({
//   projectId: "2rar6jsc", // Replace with your Sanity project ID
//   dataset: "production", // Replace with your dataset name
//   useCdn: true, // `false` if you want to ensure fresh data
// });

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

// const FetchLogo: React.FC = () => {
//   const [imageLinks, setImageLinks] = useState<ImageLink[]>([]);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "imagesLink" && slug.current in ["instagram", "github", "linkedin"]]{
//           image{
//             asset->{
//               url
//             }
//           },
//           alt,
//           slug,
//           link
//         }`
//       )
//       .then((data) => setImageLinks(data))
//       .catch(console.error);
//   }, []);

//   return <DisplayLogo imageLinks={imageLinks} />;
// };

// export default FetchLogo;

// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: "2rar6jsc", // Replace with your Sanity project ID
//   dataset: "production", // Replace with your dataset name
//   useCdn: true, // `false` if you want to ensure fresh data
// });

// export interface ImageLink {
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

// export const FetchLogo = async (): Promise<ImageLink[]> => {
//   try {
//     const data = await client.fetch(
//       `*[_type == "imagesLink" && slug.current in ["instagram", "github", "linkedin"]]{
//         image{
//           asset->{
//             url
//           }
//         },
//         alt,
//         slug,
//         link
//       }`
//     );
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "2rar6jsc", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

export interface ImageLink {
  image: {
    asset: {
      url: string;
    };
  };
  alt: string;
  slug: {
    current: string;
  };
  link: string;
}

export const FetchFooterLogo = async (): Promise<ImageLink[]> => {
  try {
    const data = await client.fetch(
      `*[_type == "imagesLink" && slug.current in ["instagram", "github", "linkedin"]]{
        image{
          asset->{
            url
          }
        },
        alt,
        slug,
        link
      }`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const FetchHeaderLogo = async (): Promise<ImageLink | null> => {
  try {
    const data = await client.fetch(
      `*[_type == "imagesLink" && slug.current == "logo"]{
        image{
          asset->{
            url
          }
        },
        alt,
        slug,
        link
      }[0]`
    );
    return data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
