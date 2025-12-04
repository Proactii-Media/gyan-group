import PageBanner from "@/components/PageBanner";
import { PigmentIntermediates } from "../components/PigmentIntermediates";

export const PigmentIntermediatesView = () => {
  return (
    <section>
      <PageBanner
        title="Pigment Intermediates"
        description="Discover our journey of innovation, commitment to quality, and dedication to sustainable chemical solutions that shape the future of industry."
        backgroundImage="/banner/banner-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pigment Intermediates" },
        ]}
      />
      <PigmentIntermediates />
    </section>
  );
};
