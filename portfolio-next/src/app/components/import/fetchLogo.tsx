import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

export interface ImageLink {
  image: {
    asset: {
      url: string;
    };
  };
  alt: string;
  slug: {
    current: string;
  };
  link: string;
}

export const FetchFooterLogo = async (): Promise<ImageLink[]> => {
  try {
    const data = await client.fetch(
      `*[_type == "imagesLink" && slug.current in ["instagram", "github", "linkedin"]]{
        image{
          asset->{
            url
          }
        },
        alt,
        slug,
        link
      }`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const FetchHeaderLogo = async (): Promise<ImageLink | null> => {
  try {
    const data = await client.fetch(
      `*[_type == "imagesLink" && slug.current == "logo"]{
        image{
          asset->{
            url
          }
        },
        alt,
        slug,
        link
      }[0]`
    );
    return data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
