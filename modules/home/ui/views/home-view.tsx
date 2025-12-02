import { AboutCompanySection } from "../components/AboutCompany";
import { IndustriesGallerySection } from "../components/GallerySection";
import { HeroSlider } from "../components/HeroSlider";

export default function HomeView() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <AboutCompanySection />
      <IndustriesGallerySection />
    </main>
  );
}
