import PageBanner from "@/components/PageBanner";
import { PharmaDetails } from "../components/PharmaDetails";

export const PharmaIntermediateDetailsView = () => {
  return (
    <section>
      <PageBanner
        title="Pharma & API Intermediates"
        description="Discover our journey of innovation, commitment to quality, and dedication to sustainable chemical solutions that shape the future of industry."
        backgroundImage="/banner/banner-2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Pharma & API Intermediates",
            href: "/products/pharma-and-api-intermediates",
          },
          { label: "slug" },
        ]}
      />
      <PharmaDetails />
    </section>
  );
};
