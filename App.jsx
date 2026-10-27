import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AuditsDirectorySection from './components/AuditsDirectorySection';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseSection from './components/WhyChooseSection';
import WorkingProcessSection from './components/WorkingProcessSection';
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { t, i18n } = useTranslation();
  const [preselectedService, setPreselectedService] = useState('');

  // Update page title and SEO meta tag based on current language
  useEffect(() => {
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';
    if (currentLang === 'ta') {
      document.title = "KIA ASSOCIATE — சட்ட இணக்கம். நம்பிக்கை. நம்பகத்தன்மை.";
    } else if (currentLang === 'hi') {
      document.title = "KIA ASSOCIATE — अनुपालन. विश्वास. विश्वसनीयता.";
    } else {
      document.title = "KIA ASSOCIATE — Compliance. Confidence. Credibility.";
    }
  }, [i18n.language]);

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-white text-deepink flex flex-col font-sans selection:bg-cobalt selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onSelectService={handleSelectService} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <AuditsDirectorySection onSelectService={handleSelectService} />
        <IndustriesSection />
        <WhyChooseSection />
        <WorkingProcessSection />
        <FounderSection />
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
