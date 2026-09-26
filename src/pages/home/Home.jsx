import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Zone from "../../components/zone/Zone";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import SplashScreen from "../../components/splashScreen/SplashScreen";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <SplashScreen />

      <header>
        <Hero />
      </header>
      <main>
        <Zone />
      </main>
      <Footer />
    </>
  );
}
