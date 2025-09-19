import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './pages/pageA/sections/HeroSection';
import StripeIcon from './components/StripeIcon';
import EcoSection from './pages/pageA/sections/EcoSection';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      <StripeIcon />
      <EcoSection />
    </div>
  );
}

export default App;
