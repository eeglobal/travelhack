import FaqContent from "../ui/components/faq/faq-content";
import FaqHero from "../ui/components/faq/faq-hero";

import { Metadata } from 'next';
 
export const metadata = {
  title: 'FAQ',
};


export default function Page() {
    return(
      <>
      <FaqHero/>
      <FaqContent/>
      </>
    )
  }