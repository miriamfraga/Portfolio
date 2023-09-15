import './App.scss';
//IMPORT COMPONENTS
import HeaderComponent from './layout/Header/HeaderComponent';
import FooterComponent from './layout/Footer/FooterComponent';
import CanvasComponent from './components/CanvasComponent/CanvasComponent';

//IMPORT PAGES 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Info from './pages/Info';
import About from './pages/About';
import Bootcamp from './pages/Bootcamp';
import Vgender from './pages/Vgender';
import Equality from './pages/Equality';
import Intervention from './pages/Intervention';
import Psychology from './pages/Psychology';


// IMPORT REACT ROUTER
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">

   <HeaderComponent ></HeaderComponent>
   <CanvasComponent></CanvasComponent>
     <main className='main__app'>
         <Routes>
         <Route exact path="/" element={<><Home/><Info/><About/><Projects/><Contact/></>}></Route>
         <Route exact path="/bootcamp" element={<Bootcamp/>}></Route>
         <Route exact path="/vgender" element={<Vgender/>}></Route>
         <Route exact path="/equality" element={<Equality/>}></Route>
         <Route exact path="/social" element={<Intervention/>}></Route>
         <Route exact path="/psychology" element={<Psychology/>}></Route>
         </Routes>
     </main>
    <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
