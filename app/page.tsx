import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Gallery } from "@/components/Gallery";
import { SocialLinks } from "@/components/SocialLinks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return <>
    <ScrollProgress/><Navbar/>
    <main id="main-content"><Hero/><About/><Skills/><Experience/><Education/><Gallery/><SocialLinks/><Contact/></main>
    <Footer/><BackToTop/>
  </>;
}
