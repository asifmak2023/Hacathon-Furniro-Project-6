import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SecondSection />
      <Products />
      <ThirdSection />
      <Footer />
    </div>
      
  )
}