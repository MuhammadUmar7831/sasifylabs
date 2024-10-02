import AdditionalServices from "./sections/AdditionalServices";
import ClientSays from "./sections/ClientSays";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWork from "./sections/HowItWork";
import NewsLetter from "./sections/NewsLetter";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import About from "./sections/About";
import Awards from "./sections/Awards";

export default function Home() {
  return (
    <main>
      <Hero /> 
      <About />
      <HowItWork />
      <Portfolio />
      <Services />
      <AdditionalServices />
      <ClientSays />
      <Awards />
      <NewsLetter />
       <Footer />
    </main>
  );
}
