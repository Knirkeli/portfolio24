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

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  description: string;
  contactPhoto: {
    asset: {
      url: string;
    };
  };
}

export const fetchContactInfo = async (): Promise<ContactInfo | null> => {
  try {
    const data = await client.fetch(
      `*[_type == "contact"]{
        phone,
        email,
        github,
        linkedin,
        description,
        contactPhoto
      }[0]`
    );
    return data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
