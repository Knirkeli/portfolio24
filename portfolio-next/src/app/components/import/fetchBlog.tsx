// "use client";
// import { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import { Card } from "../ui/card"; // Adjust the import path as necessary
// import Link from "next/link";

// const client = createClient({
//   projectId: "2rar6jsc",
//   dataset: "production",
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// const fetchBlogPosts = async () => {
//   const query = `*[_type == "blogPost"]{
//     title,
//     slug,
//     mainImage,
//     author->{
//       name,
//       profilePhoto
//     },
//     publishedAt,
//     body
//   }`;

//   try {
//     const blogPosts = await client.fetch(query);
//     return blogPosts;
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// };

// const BlogPostComponent = () => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     fetchBlogPosts().then((data) => setBlogPosts(data));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-12">
//       {blogPosts.map((post) => (
//         <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
//           <Card className="max-w-sm overflow-hidden shadow-lg p-4 cursor-pointer rounded-3xl transform transition duration-500 hover:scale-105">
//             <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>
//             {post.mainImage && (
//               <img
//                 className="w-full h-48 object-cover mb-4"
//                 src={urlFor(post.mainImage).url()}
//                 alt={`${post.title} main image`}
//               />
//             )}
//             <div className="flex items-center mb-4">
//               <div className="text-sm">
//                 <p className="text-gray-900 leading-none">
//                   Av: {post.author.name}
//                 </p>
//                 <p className="text-gray-600">
//                   {new Date(post.publishedAt).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default BlogPostComponent;

"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { Card } from "../ui/card"; // Adjust the import path as necessary

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const fetchBlogPosts = async () => {
  const query = `*[_type == "blogPost"]{
    title,
    slug,
    mainImage,
    author->{
      name,
      profilePhoto
    },
    publishedAt,
    body
  }`;

  try {
    const blogPosts = await client.fetch(query);
    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

const BlogPostComponent = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-12">
      {blogPosts.map((post) => (
        <Link
          key={post.slug.current}
          href={`/blog/${post.slug.current}`}
          scroll={false}
        >
          <Card className="max-w-sm w-full overflow-hidden shadow-lg p-4 cursor-pointer rounded-3xl transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>
            {post.mainImage && (
              <img
                className="w-full h-48 object-cover mb-4"
                src={urlFor(post.mainImage).url()}
                alt={`${post.title} main image`}
              />
            )}
            <div className="text-gray-500 text-sm mb-4">
              <p>Av: {post.author.name}</p>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostComponent;
