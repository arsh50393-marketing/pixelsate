import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diagnostic from "@/components/Diagnostic";
import Numbers from "@/components/Numbers";
import WhyFive from "@/components/WhyFive";
import AiHonestly from "@/components/AiHonestly";
import Brands from "@/components/Brands";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Diagnostic />
      <Numbers />
      <WhyFive />
      <AiHonestly />
      <Brands />
      <LeadForm />
      <Faq />
      <Footer />
    </main>
  );
}
