import AboutUs from "./components/AboutUs";
import CareerPage from "./components/CareerPage";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import Projects from "./components/Projects";
import UpcomingProjects from "./components/UpcomingProjects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <AboutUs />
      <Projects />
      <UpcomingProjects />
      <CareerPage />
    </div>
  );
}
