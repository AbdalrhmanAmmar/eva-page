import AboutUs from "@/components/Home/AboutUs";
import WhyChooseUs from "@/components/Home/chooseUs";
import CustomerReviews from "@/components/Home/CustomerReviews";
import HeroSection from "@/components/Home/HeroSection";
import { OurClients } from "@/components/Home/OurClient";
import ServicesSection from "@/components/Home/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVA - الخدمات",
  description: "استعرض خدماتنا المتميزة في مجال الأمن والحماية والتطوير العقاري",
};

export default function ServicesPage() {
  return <>
  <HeroSection />
  <AboutUs/>
  <WhyChooseUs/>
  <ServicesSection/>
  <OurClients/>
  <CustomerReviews/>
  </>;
}