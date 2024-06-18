import "./App.css";
import {
  Home,
  About,
  Skills,
  Services,
  Qualification,
  Work,
  Testimonials,
  Contact,
  Footer,
  Top
} from "./components";
import { Helmet } from "react-helmet";
import { Face } from "./assets";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:image" content={Face} />
      </Helmet>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Top />
    </div>
  );
}

export default App;
