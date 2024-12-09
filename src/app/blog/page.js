import BlogHero from "../ui/components/blog/blog-hero";
import { Metadata } from 'next';
 
export const metadata = {
  title: 'Blog',
};


export default function Page() {
    return(
      <>
      <BlogHero/>
      </>
    )
  }