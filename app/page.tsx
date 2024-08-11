import Image from "next/image";
import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";
import Menu from "@/app/ui/menu";

export default function Home() {
  return (
    <main>
      <Header/>
      <Menu/>
      <Footer/>
    </main>
  );
}
