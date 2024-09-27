"use client";
import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import useAuthors from "../import/fetchAuthor"; // Adjust the import path as necessary

const AuthorComponent = () => {
  const { authors, urlFor } = useAuthors();

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
          </div>
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
