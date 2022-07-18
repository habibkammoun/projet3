import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import LoginForm from "./components/LoginForm";
import Login from "./Pages/login"
import Skeleton from "./Pages/Skeleton";
import Registre from "./Pages/Registre";
import ObjectDetection from "./Pages/ObjectDetection"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Menu from "./Pages/Menu";
function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Menu  />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Skeleton" element={<Skeleton/>}/>
        <Route path="/Registre" element={<Registre/>}/>
        <Route path="/Object" element={<ObjectDetection/>}/>

      </Routes>
    </Router>
  )

}
export default App