import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './pages/pageA/sections/HeroSection';
import StripeIcon from './components/StripeIcon';
import EcoSection from './pages/pageA/sections/EcoSection';
import HowtobuySection from './pages/pageA/sections/HowtobuySection';
import WhyChoose from './pages/pageA/sections/WhyChoose';
import ResourcesSection from './pages/pageA/sections/ResourcesSection';
import PowerYourCoreSection from './pages/pageA/sections/PowerYourCoreSection';
import Footer from './pages/pageA/sections/Footer';
import JoinCommunitySection from './pages/pageA/sections/JoinCommunitySection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      <div className="mt-[16pxpx]">
        <StripeIcon />
      </div>

      <EcoSection />
      <HowtobuySection />
      <WhyChoose />

      <div className="mt-[150px]">
        <StripeIcon />
      </div>
      <JoinCommunitySection />
      <PowerYourCoreSection />

      <div className="mt-[150px]">
        <StripeIcon />
      </div>

      <ResourcesSection />
      <Footer />
    </div>
  );
}

export default App;
