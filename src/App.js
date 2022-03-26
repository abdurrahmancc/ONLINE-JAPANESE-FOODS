import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProduct from "./Components/AllProduct/AllProduct";
import Question from "./Components/Question/Question";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Navber from "./Navber/Navber";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navber></Navber>
      <AllProduct></AllProduct>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
