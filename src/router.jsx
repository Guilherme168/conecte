import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicial from "./pages/pagInicial";
import Navegador from "./pages/navegador";

export default function Navegacao(){
    return (

        <BrowserRouter>
        
        <Routes>
        <Route path="/" element = {<Inicial/>}> </Route>
        <Route path="/navegadorConecte" element = {<Navegador/>}> </Route>
        </Routes>
        
        </BrowserRouter>
)};