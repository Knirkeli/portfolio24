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

// const fetchProjectPosts = async () => {
//   const query = `*[_type == "projectPost"]{
//     header,
//     slug,
//     description,
//     images,
//     category->{
//       title
//     },
//     completionDate,
//     inProgress
//   }`;

//   try {
//     const projectPosts = await client.fetch(query);
//     return projectPosts;
//   } catch (error) {
//     console.error("Error fetching project posts:", error);
//     return [];
//   }
// };

// const ProjectPostComponent = () => {
//   const [projectPosts, setProjectPosts] = useState([]);

//   useEffect(() => {
//     fetchProjectPosts().then((data) => setProjectPosts(data));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {projectPosts.map((post) => (
//         <div
//           key={post.slug.current}
//           className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
//         >
//           <h2 className="text-xl font-bold mb-2">{post.header}</h2>
//           {post.images && post.images.length > 0 && (
//             <img
//               className="w-full h-48 object-cover mb-4"
//               src={urlFor(post.images[0]).url()}
//               alt={`${post.header} image`}
//             />
//           )}
//           <p className="text-gray-700 text-base mb-4">{post.description}</p>
//           {post.completionDate && (
//             <p className="text-gray-500 text-sm mb-4">
//               Ferdigstillt {post.completionDate}
//             </p>
//           )}
//           {post.inProgress && (
//             <p className="text-gray-500 text-sm mb-4">
//               Under arbeid: {post.inProgress ? "Ja" : "Nei"}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectPostComponent;

"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const fetchProjectPosts = async () => {
  const query = `*[_type == "projectPost"]{
    header,
    slug,
    description,
    images,
    category->{
      title
    },
    completionDate,
    inProgress
  }`;

  try {
    const projectPosts = await client.fetch(query);
    return projectPosts;
  } catch (error) {
    console.error("Error fetching project posts:", error);
    return [];
  }
};

const ProjectPostComponent = () => {
  const [projectPosts, setProjectPosts] = useState([]);

  useEffect(() => {
    fetchProjectPosts().then((data) => setProjectPosts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projectPosts.map((post) => (
        <Link key={post.slug.current} href={`/project/${post.slug.current}`}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 cursor-pointer">
            <h2 className="text-xl font-bold mb-2">{post.header}</h2>
            {post.images && post.images.length > 0 && (
              <img
                className="w-full h-48 object-cover mb-4"
                src={urlFor(post.images[0]).url()}
                alt={`${post.header} image`}
              />
            )}
            <p className="text-gray-700 text-base mb-4">{post.description}</p>
            {post.completionDate && (
              <p className="text-gray-500 text-sm mb-4">
                Ferdigstillt {post.completionDate}
              </p>
            )}
            {post.inProgress && (
              <p className="text-gray-500 text-sm mb-4">
                Under arbeid: {post.inProgress ? "Ja" : "Nei"}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPostComponent;
