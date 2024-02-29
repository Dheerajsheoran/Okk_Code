import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Courses from "@/components/Courses";
import Upcoming from "@/components/Upcoming";
import Sidebar from "@/components/Sidebar";
import People from "@/components/People";
import Latest from "@/components/Latest";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <div className="font-Poppins">
        <Hero />
        <Popular />
        <Courses />
        <Upcoming />
        <Latest />
        <People />
        <Footer />

      </div>

    </>
  );
}
