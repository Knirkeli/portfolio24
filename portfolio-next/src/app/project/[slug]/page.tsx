"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const fetchProjectBySlug = async (slug: unknown) => {
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

interface Params {
  slug: string;
}

const ProjectPage = ({ params }: { params: Params }) => {
  const { slug } = params;
  interface Project {
    header: string;
    slug: string;
    description: string;
    images: { _key: string; alt?: string }[];
    category: { title: string };
    completionDate?: string;
    inProgress?: boolean;
  }

  const [project, setProject] = useState<Project | null>(null);

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
