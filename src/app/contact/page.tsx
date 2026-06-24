import Contact from "@/components/Contact";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Contact | AKS Two Wheeler Works",
  description:
    "Contact AKS Two Wheeler Works in Mukkadu for two-wheeler service bookings, repair questions and emergency bike assistance.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Yellow Background */}
      <PageIntro
        eyebrow="Book Your Service"
        title="Contact"
        description="Call, visit or send a booking request. We will help you choose the right service and get your two-wheeler back on the road."
        className="bg-[#F5B800]"
      />
      
      {/* Contact Details/Form */}
      <Contact />

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-[6%] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 text-black">Find Us</h2>
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-4 border-yellow-500 shadow-xl overflow-hidden rounded-lg sm:rounded-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.854013491444!2d77.21557087532356!3d8.26188259178553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fe001391983f%3A0x175c57b7f168a241!2sAks%20two%20wheeler%20works!5e0!3m2!1sen!2sin!4v1717389807577!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Location of Aks two wheeler works"
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-6 text-gray-700 font-medium text-sm sm:text-base">
            <p>📍 Mukkadu, Thengapattanam, Tamil Nadu 629173</p>
          </div>
        </div>
      </section>
    </>
  );
}