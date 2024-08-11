import Image from "next/image";
import Footer from "@/app/ui/footer";
import HeroHeader from "@/app/ui/HeroHeader";
import HeroComponent from "@/app/ui/HeroContent";
import Form from "@/app/ui/Form";

export default function Home() {
  return (
    <main>
      <HeroHeader>
        <HeroComponent/>
      </HeroHeader>
      <Form/>
      <Footer/>
    </main>
  );
}
