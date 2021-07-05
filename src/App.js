import "./App.css";
import Corosel from "./Component/Corosel";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Slider from "./Component/Slider";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Corosel />
      <Banner />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
