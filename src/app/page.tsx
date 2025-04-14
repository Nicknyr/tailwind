import "tailwindcss";
import Image from "next/image";
import Card from "./components/Card.js";
import FeatureSection from "./components/FeatureSection.js";

export default function Home() {
  return (
    <div className="">
      <main className="mt-20">
       
        <FeatureSection />
      </main>
    </div>
  );
}
