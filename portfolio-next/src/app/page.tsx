import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import ProjectPostComponent from "./components/import/fetchProject";
import ProjectsBlogTabs from "./components/structure/projectsBlog";
import AuthorComponent from "./components/structure/author";

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  return (
    <main className="flex bg-gray-100 min-h-screen flex-col">
      <div className="space-y-12">
        <AuthorComponent />
        <ProjectsBlogTabs />
      </div>
    </main>
  );
}
