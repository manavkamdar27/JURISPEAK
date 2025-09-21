import Navigation from '@/components/Navigation';
import AboutSection from '@/components/sections/AboutSection';
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
        {/* About with a law-themed background image and navy overlay */}
        <div className="relative bg-image-law">
          <div className="absolute inset-0 bg-navy-900/60" />
          <div className="relative theme-blue">
            <AboutSection />
          </div>
        </div>
        {/* Services subtle light gray background (darker tint) */}
        <div className="bg-[rgba(129,125,123,0.20)]">
          <ServicesSection />
        </div>
        <div className="bg-navy-900/90">
          <TeamSection />
        </div>
        <div className="bg-gold-500 theme-gray">
          <CareersSection />
        </div>
        <div className="bg-navy-900 theme-blue">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
