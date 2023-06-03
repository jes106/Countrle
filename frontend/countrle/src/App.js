import React, { useEffect, useRef } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import AcercaDe from "./components/AcercaDe";
import Juego from "./components/Juego";
import Reglas from "./components/Reglas";
import Error404 from "./components/Error404";
import Error500 from "./components/Error500";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Resumen from "./components/Resumen";
import Ajustes from "./components/Ajustes";
import logo from "./logo.png";
import Ranking from "./components/Ranking";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const navbarCollapse = useRef();

  return (
    <Router>
      <div id="contenedor">
        <div id="menu">
          <nav
            id="barra-menu"
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          >
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img id="logo" src={logo} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarNav"
                ref={navbarCollapse}
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        if (navbarCollapse.current.classList.contains("show"))
                          navbarCollapse.current.classList.remove("show");
                      }}
                      className="nav-link"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        if (navbarCollapse.current.classList.contains("show"))
                          navbarCollapse.current.classList.remove("show");
                      }}
                      className="nav-link"
                      to="/reglas"
                    >
                      Reglas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        if (navbarCollapse.current.classList.contains("show"))
                          navbarCollapse.current.classList.remove("show");
                      }}
                      className="nav-link"
                      to="/acercaDe"
                    >
                      Acerca de
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        if (navbarCollapse.current.classList.contains("show"))
                          navbarCollapse.current.classList.remove("show");
                      }}
                      className="nav-link"
                      to="/ranking"
                    >
                      Ranking
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        if (navbarCollapse.current.classList.contains("show"))
                          navbarCollapse.current.classList.remove("show");
                      }}
                      className="nav-link"
                      to="/juego"
                    >
                      Juego
                    </Link>
                  </li>

                  <li class="nav-item active m-2 dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/ajustes"
                      role="button"
                      id="navbarDropdown1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                      &nbsp; Mi perfil
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <li>
                        <a class="dropdown-item disabled" href="#">
                          manolo69
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/ajustes">
                          <i class="fas fa-cog"></i>
                          &nbsp; Ajustes de perfil
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          <i class="fas fa-sign-out-alt"></i>
                          &nbsp; Cerrar sesión
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acercaDe" element={<AcercaDe />} />
            <Route path="/juego" element={<Juego />} />
            <Route path="/reglas" element={<Reglas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
