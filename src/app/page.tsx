import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars"
export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedCars/>
    </div>
  )
}
