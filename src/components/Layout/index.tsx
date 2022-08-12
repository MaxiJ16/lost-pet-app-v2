import React from "react";
// Outlet es un componente que le indica a un componente padre de otras rutas donde tiene que mostrar el componente hijo
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";

export function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}
