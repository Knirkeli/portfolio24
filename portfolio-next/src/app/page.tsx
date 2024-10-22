import ProjectsBlogTabs from "./components/structure/projectsBlog";
import AuthorComponent from "./components/structure/author";
import WelcomeSection from "./components/structure/welcome";
import SloganSection from "./components/structure/Slogan";

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  return (
    <main className="flex bg-gradient-to-b from-gray-300 via-green-200 to-green-300 min-h-screen flex-col pb-16 mb-6">
      <div className="space-y-12">
        <SloganSection />
        <WelcomeSection />
        <div className="min-h-screen">
          <ProjectsBlogTabs />
        </div>
      </div>
    </main>
  );
}
