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

const fetchAuthors = async () => {
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

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then((data) => setAuthors(data));
  }, []);

  return { authors, urlFor };
};

export default useAuthors;
