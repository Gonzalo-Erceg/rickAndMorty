
import './App.css';
import {Route, Routes} from "react-router-dom"



// importar componentes
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import CharacterPage from './pages/CharacterPage.jsx';
import Footer from "./components/footer.jsx"


// ---------------------






function App() {
  
  
  return (
        <>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/character/:charid" element={<CharacterPage/>} />
        </Routes>
        <Footer/>
      </>
);
}

export default App;
