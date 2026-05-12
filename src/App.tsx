import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocationSection from "./components/Localization";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ReservationSection from "./components/ReservationSection";

export default function App(){
  return (
    <>
      <Navbar/>
      <div id="inicio">
        <Hero/>
      </div>
      <div id="menu">
        <MenuSection />
      </div>
      <div id="reservas">
        <ReservationSection/>
      </div>
      <div id="sobre">
        <AboutSection/>
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div>
        <LocationSection/>
      </div>
      <Footer />
    </>
  )
}