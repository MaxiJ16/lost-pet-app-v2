import "./index.css";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
// importamos las rutas del router
import { AppRoutes } from "./router";
// Importamos RecoilRoot
import { LoaderSuspense } from "ui/Loader";
import mapboxgl from "mapbox-gl";

// Lugar de mi HTML donde se imprime
const container = document.getElementById("app");
const root = createRoot(container);

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

// App es el componente que vamos a imprimir
root.render(
  <RecoilRoot>
    <Suspense fallback={<LoaderSuspense />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
