import ContactSection from "../Components/ContactSection";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import TeachersSection from "../Components/TeachersSection";
import TitleSection from "../Components/TitleSection";
import UsersSection from "../Components/UsersSection";

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <TitleSection />
      <UsersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
