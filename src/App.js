import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProduct from "./Components/AllProduct/AllProduct";
import Question from "./Components/Question/Question";

function App() {
  return (
    <div className="App">
      <AllProduct></AllProduct>
      <Question></Question>
    </div>
  );
}

export default App;
