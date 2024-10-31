"use client";
// import { useRouter } from "next/router";
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

// const fetchProjectBySlug = async (slug) => {
//   const query = `*[_type == "projectPost" && slug.current == $slug][0]{
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
//     const project = await client.fetch(query, { slug });
//     return project;
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return null;
//   }
// };

// const ProjectPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     if (slug) {
//       fetchProjectBySlug(slug).then((data) => setProject(data));
//     }
//   }, [slug]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{project.header}</h1>
//       {project.images && project.images.length > 0 && (
//         <img
//           className="w-full h- object-cover mb-4"
//           src={urlFor(project.images[0]).url()}
//           alt={`${project.header} image`}
//         />
//       )}
//       <p className="text-gray-700 text-base mb-4">{project.description}</p>
//       {project.completionDate && (
//         <p className="text-gray-500 text-sm mb-4">
//           Ferdigstillt {project.completionDate}
//         </p>
//       )}
//       {project.inProgress && (
//         <p className="text-gray-500 text-sm mb-4">
//           Under arbeid: {project.inProgress ? "Ja" : "Nei"}
//         </p>
//       )}
//       <p className="text-gray-500 text-sm mb-4">
//         Kategori: {project.category?.title}
//       </p>
//     </div>
//   );
// };

// export default ProjectPage;

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

const fetchProjectBySlug = async (slug) => {
  const query = `*[_type == "projectPost" && slug.current == $slug][0]{
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
    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

const ProjectPage = ({ params }) => {
  const { slug } = params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchProjectBySlug(slug).then((data) => setProject(data));
    }
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{project.header}</h1>
      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {project.images.map((image) => (
            <img
              key={image._key}
              className="w-full h-auto object-cover"
              src={urlFor(image).url()}
              alt={image.alt || `${project.header} image`}
            />
          ))}
        </div>
      )}
      <p className="text-gray-700 text-base mb-4">{project.description}</p>
      {project.completionDate && (
        <p className="text-gray-500 text-sm mb-4">
          Ferdigstillt {project.completionDate}
        </p>
      )}
      {project.inProgress && (
        <p className="text-gray-500 text-sm mb-4">
          Under arbeid: {project.inProgress ? "Ja" : "Nei"}
        </p>
      )}
    </div>
  );
};

export default ProjectPage;
