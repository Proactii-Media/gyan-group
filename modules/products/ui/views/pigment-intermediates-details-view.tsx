import PageBanner from "@/components/PageBanner";
import { PigmentIntermediatesDetails } from "../components/PigmentIntermediatesDetails";

export const PigmentIntermediatesDetailsView = () => {
  return (
    <section>
      <PageBanner
        title="Pigment Intermediates"
        description="Discover our journey of innovation, commitment to quality, and dedication to sustainable chemical solutions that shape the future of industry."
        backgroundImage="/banner/banner-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Pigment Intermediates",
            href: "/products/pigment-intermediates",
          },
          { label: "slug" },
        ]}
      />
      <PigmentIntermediatesDetails />
    </section>
  );
};
