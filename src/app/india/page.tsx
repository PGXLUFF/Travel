import type { Metadata } from "next";
import IndiaPackagesPageContent from "@/components/IndiaPackagesPageContent";

export const metadata: Metadata = {
  title: "India Domestic Tour Packages - Intro Travels India",
  description: "Explore our curated domestic tour packages across India, including Agra, Kerala backwaters, Kashmir, Goa, and Leh Ladakh.",
};

export default function Page() {
  return <IndiaPackagesPageContent />;
}
