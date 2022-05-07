import './App.css';
import Aboutus from './components/Aboutus';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Formsdownload from './components/Formsdownload';
import Navbar from './components/Navbar';
import Taxrules from './components/Taxrules';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Generatingpdf from './components/Generatingpdf';

function App() {
  return (
     <Router>
      <Navbar title="Income Tax Calculator"/>
      <Routes>
        <Route exact path="/" element={<Calculator/>}></Route>
        <Route exact path="/aboutus" element={<Aboutus/>}></Route>
        <Route exact path="/formsdownload" element={<Formsdownload/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/taxrules" element={<Taxrules/>}></Route>
        <Route exact path="/generatingpdf" element={<Generatingpdf/>}></Route>

      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;