import projDocsImg from './images/Project Docs.jpg';
import submittalImg from './images/Chat.jpg';
import assistanceImg from './images/Submittal Assitant.jpg';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplitHero from './components/SplitHero';
import Features from './components/Features';
import AISection from './components/AISection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <Features />
      <SplitHero 
        primaryText="Upload your project documentation"
        secondaryText="Our AI will process and store it for fast retrieval and reference at any time."
        imageSrc={projDocsImg}
        imageOnRight={true}
      />
      <SplitHero 
        primaryText="Upload a submittal and get instant insights"
        secondaryText="A report is generated in seconds highlighting all the important info and saving you hours of time."
        imageSrc={submittalImg}
        imageOnRight={false}
      />
      <SplitHero 
        primaryText="Get further assistance with the power of AI"
        secondaryText="We have trained our AI to be your personal submittal sidekick, taking the drudgery and guesswork out of the review process."
        imageSrc={assistanceImg}
        imageOnRight={true}
      />
      <AISection />

      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
