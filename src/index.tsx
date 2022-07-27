import  { Suspense } from "react";

// importamos las rutas del router
import { AppRoutes } from "./router";

import { BrowserRouter } from "react-router-dom";
// Importamos RecoilRoot
import { RecoilRoot } from "recoil";

import "./index.css";

import { createRoot } from "react-dom/client";
// Lugar de mi HTML donde se imprime
const container = document.getElementById("app");
const root = createRoot(container);

// App es el componente que vamos a imprimir
root.render(
  <RecoilRoot>
    <Suspense fallback={null}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
