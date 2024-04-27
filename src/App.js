import CoachingSection from "./components/CoachingSection";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import TitleSection from "./components/TitleSection";
import TrainerSection from "./components/TrainerSection";
import WebinarSection from "./components/WebinarSection";

function App() {
  return (
    <div className="bg-[#FFFFFF]">
    {/* herosection  */}
    <HeroSection />
    {/* logo-section  */}
    <LogoSection />
    {/* trainerSection  */}
    <TrainerSection />
    {/* titleSection  */}
    <TitleSection />
    {/* WebinarSection  */}
    <WebinarSection />
    {/* CoachingSection  */}
    <CoachingSection />
    </div>
  );
}

export default App;
