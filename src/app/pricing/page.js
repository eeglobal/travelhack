import PricingContent from "../ui/components/pricing/pricing-content";
import PricingHero from "../ui/components/pricing/pricing-hero";

import { Metadata } from 'next';
 
export const metadata = {
  title: 'Pricing',
};
export default function Page() {
  
    return (
      <>
      <PricingHero/>
      <PricingContent/>
      </>
    );
  }