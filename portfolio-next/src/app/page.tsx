import ProjectsBlogTabs from "./components/structure/projectsBlog";
import AuthorComponent from "./components/structure/author";

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  return (
    <main className="flex bg-gray-100 min-h-screen flex-col pb-16 mb-6">
      <div className="space-y-12">
        <AuthorComponent />
        <ProjectsBlogTabs />
      </div>
    </main>
  );
}
