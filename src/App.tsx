import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './pages/pageA/sections/HeroSection';
import StripeIcon from './components/StripeIcon';
import EcoSection from './pages/pageA/sections/EcoSection';
import HowtobuySection from './pages/pageA/sections/HowtobuySection';
import WhyChoose from './pages/pageA/sections/WhyChoose';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      <StripeIcon />
      <EcoSection />
      <HowtobuySection />
      <WhyChoose />

      <div className='mt-[186px]'>
 <StripeIcon />
      </div>
     
    </div>
  );
}

export default App;
