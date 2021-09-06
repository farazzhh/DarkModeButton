import "./App.css";
import { useState } from "react";
import Home from "./Pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHanlder = () => {
    setDarkMode(!darkMode);
    console.log("clicked");
  };
  
  return (
    <Router  className={`${!darkMode && `dark`}`}>
      <Navbar darkMode={darkMode} darkModeHanlder={darkModeHanlder} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Footer/>
    </Router>
  );
}

export default App;
