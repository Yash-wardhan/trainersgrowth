import CoachingSection from "./components/CoachingSection";
import FeedBackSection from "./components/FeedBackSection";
import Footer from "./components/Footer";
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
    {/* FeedBackSection  */}
    <FeedBackSection />
    {/* footerSection  */}
    <Footer />
    </div>
  );
}

export default App;
