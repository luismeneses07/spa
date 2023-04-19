import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";
import Sobre from "./pages/Sobre";
import Categorias from "./pages/Categoria";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts/:id" element={<Post />} />"
        <Route path="/categoria/:id/*" element={<Categorias />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
