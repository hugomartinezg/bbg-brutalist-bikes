import React from 'react';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TelemetryModule } from './components/TelemetryModule';
import { Segments } from './components/Segments';
import { Specs } from './components/Specs';
import { Testimonials } from './components/Testimonials';
import { PreOrderForm } from './components/PreOrderForm';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-hanken-grotesk">
      {/* Top Banner Ticker */}
      <Ticker />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Live IoT Telemetry */}
        <TelemetryModule />

        {/* 3. 4 Target Segments */}
        <Segments />

        {/* 4. Industrial Magnesium Hardware Specs */}
        <Specs />

        {/* 5. Real Testimonials */}
        <Testimonials />

        {/* 6. Pre-Order & Checkout */}
        <PreOrderForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Nav Bar */}
      <BottomNav />
    </div>
  );
};

export default App;
