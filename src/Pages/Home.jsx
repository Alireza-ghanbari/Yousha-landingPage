import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import TeachersSection from "../Components/TeachersSection";
import TitleSection from "../Components/TitleSection";

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <TitleSection />
    </div>
  )
}
