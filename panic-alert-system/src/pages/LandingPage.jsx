import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import SafetyFeatures from "../components/landing/SafetyFeatures";
import CTABanner from "../components/landing/CTABanner";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SafetyFeatures />
      <CTABanner />
      <Footer />
    </div>
  );
}