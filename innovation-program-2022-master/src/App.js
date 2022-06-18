import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Contato from "./components/Contato";
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";
import PagCidadao from "./components/PagCidadao";
import PagColaboradores from "./components/PagColaboradores";
import PagControlFiscal from "./components/PagControlFiscal";
import PagFornecedor from "./components/PagFornecedor";
import PagGestor from "./components/PagGestor";
import PagParceiros from "./components/PagParceiros";
import Sobre from "./components/Sobre";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/pagFornecedor" element={<PagFornecedor />}/>
      <Route path="/pagGestor" element={<PagGestor />}/>
      <Route path="/pagParceiros" element={<PagParceiros />}/>
      <Route path="/pagCidadao" element={<PagCidadao />}/>
      <Route path="/pagColaboradores" element={<PagColaboradores />}/>
      <Route path="/pagControlFiscal" element={<PagControlFiscal />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/contato" element={<Contato />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
