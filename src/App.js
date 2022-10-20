import Contact from "./page/Contact";
import Details from "./page/Details";
import Home from "./page/Home";
import Explore from "./page/Explore";
import Header from "./header/Header";
import './App.css'
import Footer from "../src/footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore/" element={<Explore />} />
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<>404 page Not Found</>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};
export default App;
