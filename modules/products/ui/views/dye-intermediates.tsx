import PageBanner from "@/components/PageBanner";
import { DyeIntermediates } from "../components/DyeIntermediates";

export const DyeIntermediatesView = () => {
  return (
    <section>
      <PageBanner
        title="Dye Intermediates"
        description="Discover our journey of innovation, commitment to quality, and dedication to sustainable chemical solutions that shape the future of industry."
        backgroundImage="/banner/banner-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dye Intermediates" },
        ]}
      />
      <DyeIntermediates />
    </section>
  );
};
