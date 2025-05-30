import React from 'react';
import AboutHero from './AboutHero';
import AboutDomain from './AboutDomain';
import AboutTeam from './AboutTeam';
import AboutContact from './AboutContact';

export default function AboutPage() {
  return (
    <div className="bg-[#070B14] min-h-screen">
      <AboutHero />
      <AboutDomain />
      <AboutTeam />
      <AboutContact />
    </div>
  );
}
