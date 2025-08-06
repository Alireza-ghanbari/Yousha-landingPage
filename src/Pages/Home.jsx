import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import TeachersSection from "../Components/Home/TeachersSection";
import TitleSection from "../Components/Home/TitleSection";
import UsersSection from "../Components/Home/UsersSection";
import FAQSection from "../Components/Home/FAQSection";
import ContactSection from "../Components/Home/ContactSection";
import Footer from "../Components/Footer";

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
