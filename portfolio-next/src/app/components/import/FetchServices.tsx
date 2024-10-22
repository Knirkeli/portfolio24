import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export interface Service {
  image: {
    asset: {
      url: string;
    };
  };
  altText: string;
  title: string;
  description: string;
}

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const data = await client.fetch(
      `*[_type == "services"]{
        image{
          asset->{
            url
          }
        },
        altText,
        title,
        description
      }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
