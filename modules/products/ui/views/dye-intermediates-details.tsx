import PageBanner from "@/components/PageBanner";
import { DyeIntermediatesDetails } from "../components/DyeIntermediatesDetails";

export const DyeIntermediatesDetailsView = () => {
  return (
    <section>
      <PageBanner
        title="Dye Intermediates"
        description="Discover our journey of innovation, commitment to quality, and dedication to sustainable chemical solutions that shape the future of industry."
        backgroundImage="/banner/banner-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Dye Intermediates",
            href: "/products/dye-intermediates",
          },
          { label: "slug" },
        ]}
      />
      <DyeIntermediatesDetails />
    </section>
  );
};
