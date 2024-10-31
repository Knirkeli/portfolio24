"use client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const fetchBlogPosts = async () => {
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
