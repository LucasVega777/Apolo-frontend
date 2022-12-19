import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./login";
import Header from "./componentes/header";
import TablaRol from "./componentes/rol/Rol";
import * as ProyectoHome from "./componentes/proyecto/home";
import Footer from "./componentes/footer";
import Usuario from "./componentes/usuarios/home";
import DataTable from "./componentes/usuarios/dataTable";
import { GestionProyectos } from "./componentes/gestion/home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact key={"/"} element={<HomePage />} />
                <Route
                    path="/frontendaprendelds"
                    exact
                    key={"/frontendaprendelds"}
                    element={<Login />}
                />
                <Route
                    path="/usuarios"
                    exact
                    key={"/usuarios"}
                    element={<Usuarios />}
                />
                <Route path="/roles" exact key={"/roles"} element={<Roles />} />
                <Route
                    path="/proyectos"
                    exact
                    key={"/proyectos"}
                    element={<Proyectos />}
                />
                <Route
                    path="/gestion"
                    exact
                    key={"/gestion"}
                    element={<Gestion />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

const Gestion = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <div className={"container"}>
                    <GestionProyectos />
                </div>
            </section>
            <Footer />
        </>
    );
};

const Usuarios = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <div className={"container"}>
                    <Usuario />
                    {/* <DataTable/> */}
                </div>
            </section>
            <Footer />
        </>
    );
};

const Roles = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <TablaRol />
            </section>
            <Footer />
        </>
    );
};

const Proyectos = function () {
    return (
        <>
            <Header />
            <section id={"hero"} className={"hero"}>
                <div className={"container"}>
                    <ProyectoHome.default />
                </div>
            </section>
            <Footer />
        </>
    );
};
