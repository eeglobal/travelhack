import Image from "next/image";
import { montserrat } from "./ui/fonts";
import HeroHome from "./ui/components/hero-home";
import FeatureList from "./ui/components/feature-list";
import FeaturedTravel from "./ui/components/featured-travel";
import HowItWorks from "./ui/components/how-it-works";
import NewsSection from "./ui/components/news-section";
import Testimonials from "./ui/components/testimonials";
import PartnersTab from "./ui/components/partners-tab";

export default function Home() {
  return (
    <div className="">
      <div className="ag-hero-video-container">
        <video autoPlay playsInline muted loop>
          <source src="/hero-video.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div class="ag-hero-video-content">
          <HeroHome/>
        </div>
      </div>
      <PartnersTab/>
      <FeatureList/>
      <FeaturedTravel/>
      <HowItWorks/>
      <Testimonials/>
      <NewsSection/>
    </div>
    
  );
}
