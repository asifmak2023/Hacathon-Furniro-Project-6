import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShopBadge from "@/components/ShopBadge";
import ShopHeroSection from "@/components/ShopHeroSection";
import ShopProducts from "@/components/ShopProducts";
export default function Shop() {
    return (
      <div>
        <Header />
        <ShopHeroSection />
        <ShopProducts />
        <ShopBadge />
        <Footer />
        
    </div>
    );
  }