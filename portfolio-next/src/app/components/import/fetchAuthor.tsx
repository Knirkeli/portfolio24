// "use client";
// import { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// const client = createClient({
//   projectId: "2rar6jsc",
//   dataset: "production",
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// const fetchAuthor = async () => {
//   const query = `*[_type == "author"]{
//     name,
//     slug,
//     coverPhoto,
//     profilePhoto,
//     bio
//   }`;

//   try {
//     const authors = await client.fetch(query);
//     return authors;
//   } catch (error) {
//     console.error("Error fetching authors:", error);
//     return [];
//   }
// };

// const AuthorComponent = () => {
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     fetchAuthor().then((data) => setAuthors(data));
//   }, []);

//   return (
//     <div>
//       {authors.map((author) => (
//         <div key={author.slug.current}>
//           <h2>{author.name}</h2>
//           <img
//             src={urlFor(author.coverPhoto).url()}
//             alt={`${author.name} cover`}
//           />
//           <img
//             src={urlFor(author.profilePhoto).url()}
//             alt={`${author.name} profile`}
//           />
//           <div>
//             {author.bio.map((block, index) => (
//               <p key={index}>{block.children[0].text}</p>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AuthorComponent;

// "use client";
// import { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// const client = createClient({
//   projectId: "2rar6jsc",
//   dataset: "production",
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// const fetchAuthor = async () => {
//   const query = `*[_type == "author"]{
//     name,
//     slug,
//     coverPhoto,
//     profilePhoto,
//     bio
//   }`;

//   try {
//     const authors = await client.fetch(query);
//     return authors;
//   } catch (error) {
//     console.error("Error fetching authors:", error);
//     return [];
//   }
// };

// const AuthorComponent = () => {
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     fetchAuthor().then((data) => setAuthors(data));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {authors.map((author) => (
//         <div
//           key={author.slug.current}
//           className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
//         >
//           <h2 className="text-xl font-bold mb-2">{author.name}</h2>
//           <img
//             className="w-full h-48 object-cover mb-4"
//             src={urlFor(author.coverPhoto).url()}
//             alt={`${author.name} cover`}
//           />
//           <img
//             className="w-24 h-24 rounded-full mx-auto mb-4"
//             src={urlFor(author.profilePhoto).url()}
//             alt={`${author.name} profile`}
//           />
//           <div className="text-gray-700 text-base">
//             {author.bio.map((block, index) => (
//               <p key={index} className="mb-2">
//                 {block.children[0].text}
//               </p>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AuthorComponent;

"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const fetchAuthor = async () => {
  const query = `*[_type == "author"]{
    name,
    slug,
    coverPhoto,
    profilePhoto,
    bio
  }`;

  try {
    const authors = await client.fetch(query);
    return authors;
  } catch (error) {
    console.error("Error fetching authors:", error);
    return [];
  }
};

const AuthorComponent = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthor().then((data) => setAuthors(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {authors.map((author) => (
        <div
          key={author.slug.current}
          className="w-full rounded overflow-hidden shadow-lg bg-white p-6"
        >
          <h2 className="text-2xl font-bold mb-4">{author.name}</h2>
          <img
            className="w-full h-64 object-cover mb-6"
            src={urlFor(author.coverPhoto).url()}
            alt={`${author.name} cover`}
          />
          <img
            className="w-32 h-32 rounded-full mx-auto mb-6"
            src={urlFor(author.profilePhoto).url()}
            alt={`${author.name} profile`}
          />
          <div className="text-gray-700 text-lg">
            {author.bio.map((block, index) => (
              <p key={index} className="mb-4">
                {block.children[0].text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorComponent;
