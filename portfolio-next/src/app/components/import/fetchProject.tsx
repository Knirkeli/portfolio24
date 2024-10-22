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

const useProjectPosts = () => {
  const [projectPosts, setProjectPosts] = useState([]);

  useEffect(() => {
    fetchProjectPosts().then((data) => setProjectPosts(data));
  }, []);

  return { projectPosts, urlFor };
};

export default useProjectPosts;
