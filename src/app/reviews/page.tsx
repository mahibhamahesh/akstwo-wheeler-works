import PageIntro from "@/components/PageIntro";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Reviews | AKS Two Wheeler Works",
  description:
    "Read customer reviews from riders who trust AKS Two Wheeler Works for two-wheeler repairs and service in Mukkadu.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Customer Words"
        title="Reviews"
        description="Real feedback from riders who visit AKS for repairs, routine maintenance, genuine parts and professional two-wheeler care."
        className="bg-[#F5B800]"
      />
      <Testimonials />
    </>
  );
}