import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Hero from "./section/hero/hero";
import FeaturedProject from "./section/project/featured-project";
import OtherProject from "./section/other-project/other-project";
import About from "./section/about/about";
import Experience from "./section/experience/experience";
import Contact from "./section/contact/contact";

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080b10]">
      <Navbar />

      <Hero />

      <FeaturedProject />

      <OtherProject />

      <About />

      <Experience />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;