"use client";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";

const client = createClient({
  projectId: "2rar6jsc",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const fetchAuthor = async () => {
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

const AuthorComponent = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthor().then((data) => setAuthors(data));
  }, []);

  return (
    <div className="grid grid-cols-1 p-12">
      {authors.map((author) => (
        <Card
          key={author.slug.current}
          className="w-full rounded overflow-hidden shadow-lg bg-white p-6"
        >
          <div className="relative mb-6">
            <img
              className="w-full h-64 object-cover mb-6"
              src={urlFor(author.coverPhoto).url()}
              alt={`${author.name} cover`}
            />

            <Avatar className="w-16 h-16 lg:w-24 lg:h-24 rounded-full absolute lg:top-4 lg:left-4 top-1 left-1">
              <AvatarImage
                src={urlFor(author.profilePhoto).url()}
                alt={`${author.name} profile photo`}
              ></AvatarImage>
            </Avatar>
          </div>{" "}
          <h2 className="text-2xl font-bold mb-4">{author.name}</h2>
          <div className="text-gray-700 text-lg">
            {author.bio.map((block, index) => (
              <p key={index} className="mb-4">
                {block.children[0].text}
              </p>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AuthorComponent;
