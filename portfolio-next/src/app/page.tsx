import ProjectsBlogTabs from "./components/structure/projectsBlog";
// import AuthorComponent from "./components/structure/author";
import WelcomeSection from "./components/structure/welcome";
import SloganSection from "./components/structure/Slogan";
import Cover from "./components/structure/cover";

const options = { next: { revalidate: 60 } };

export default async function IndexPage() {
  return (
    <main className="flex flex-col">
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
