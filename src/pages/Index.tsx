
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import CompetitiveProgrammingSection from "../components/CompetitiveProgrammingSection";
import PhotoCollageSection from "../components/PhotoCollageSection";
import HackathonWinsSection from "../components/HackathonWinsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonWinsSection />
        <CompetitiveProgrammingSection />
        <PhotoCollageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
