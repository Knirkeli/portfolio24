import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import AuthorComponent from "./components/import/fetchAuthor";
import ProjectPostComponent from "./components/import/fetchProject";

const options = { next: { revalidate: 60 } };

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, name, slug, date}|order(date desc)`);

export default async function IndexPage() {
  const events = await client.fetch(EVENTS_QUERY, {}, options);

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Portfolio</h1>
      <div className="space-y-12">
        <p className="text-lg mb-4">My portfolio</p>
        <AuthorComponent />
        <ProjectPostComponent />
      </div>
    </main>
  );
}
