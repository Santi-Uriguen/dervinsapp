import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import { useState } from "react";

function App() {
  const [conCart, setConCart] = useState(false);
  return (
    <div className="App">
      <Header conCart={conCart} />
      <Main setConCart={setConCart} />
      <Footer />
    </div>
  );
}

export default App;
