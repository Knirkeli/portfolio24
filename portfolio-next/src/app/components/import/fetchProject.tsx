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

const fetchProjectPosts = async () => {
  const query = `*[_type == "projectPost"]{
    header,
    slug,
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-12">
      {projectPosts.map((post) => (
        <Link
          key={post.slug.current}
          href={`/project/${post.slug.current}`}
          scroll={false}
        >
          <Card className="max-w-sm overflow-hidden shadow-lg p-4 cursor-pointer rounded-3xl transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-2 text-center">
              {post.header}
            </h2>
            {post.images && post.images.length > 0 && (
              <img
                className="w-full h-48 object-cover mb-4"
                src={urlFor(post.images[0]).url()}
                alt={`${post.header} image`}
              />
            )}
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
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPostComponent;
