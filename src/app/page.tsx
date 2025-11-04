import Navigation from '@/components/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import CareersSection from '@/components/sections/CareersSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content">
        <HeroSection />
        
        {/* About with custom background color */}
        <div className="relative bg-[#2a3b6c]">
          <div className="relative">
            <AboutSection />
          </div>
        </div>
        {/* Services subtle light gray background (darker tint) */}
        <div className="bg-[rgba(129,125,123,0.20)]">
          <ServicesSection />
        </div>
        <div className="relative bg-[#2a3b6c]">
          <div className="relative">
            <TeamSection />
          </div>
        </div>
        <div className="bg-[rgba(129,125,123,0.20)]">
          <CareersSection />
        </div>
        <div className="relative bg-[#2a3b6c]">
          <div className="relative">
            <ContactSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
