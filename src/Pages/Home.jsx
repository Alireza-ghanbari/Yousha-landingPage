import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
      <Navbar />
      <HeroSection />
    </div>
  )
}
