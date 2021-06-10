import "./App.css";
import Footer from "./componemts/Footer/Footer";
import Home from "./componemts/Home/Home";
import Contact from "./componemts/Contact/Contact";
import Trainers from "./componemts/Trainers/Trainers";
import About from "./componemts/About/About";
import Nav from "./componemts/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
