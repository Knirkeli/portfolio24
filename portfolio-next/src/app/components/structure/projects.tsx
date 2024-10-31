"use client";
import Link from "next/link";
import { Card } from "../ui/card";
import useProjectPosts from "../import/fetchProject";

interface ProjectPost {
  slug: { current: string };
  header: string;
  images?: { url: () => string }[];
  completionDate?: string;
  inProgress?: boolean;
}

const ProjectPostComponent = () => {
  const { projectPosts, urlFor } = useProjectPosts() as {
    projectPosts: ProjectPost[];
    urlFor: (source: unknown) => { url: () => string };
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projectPosts.map((post) => (
        <Link
          key={post.slug.current}
          href={`/project/${post.slug.current}`}
          scroll={false}
        >
          <Card className="max-w-md overflow-hidden shadow-lg px-4 cursor-pointer rounded-3xl transform transition duration-500 hover:scale-105">
            <h2 className="text-l font-bold mb-2 text-center">{post.header}</h2>
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
