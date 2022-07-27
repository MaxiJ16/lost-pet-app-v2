// React
import { Routes, Route } from "react-router-dom";

// // Components
// import { Layout } from "components/layout";

import { Layout } from "../components/Layout";
// Pages
import { Home } from "../pages/Home";
import { Auth, Password } from "pages/Auth";
import { MyData } from "pages/MyData";
import { ReportPet } from "pages/ReportPet";
import { MyPets } from "pages/MyPets";
import { EditPets } from "pages/EditPets";

// import { SearchResults } from "../pages/results/SearchResults";
// import { ItemPage } from "../pages/item/Item";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/auth">
          <Route index element={<Auth />}></Route>
          <Route path="password" element={<Password />}></Route>
        </Route>
        <Route path="/my-data" element={<MyData />}></Route>
        <Route path="/report-pet" element={<ReportPet />}></Route>
        <Route path="/my-pets" element={<MyPets />}></Route>
        <Route path="/edit-pet" element={<EditPets />}></Route>
        {/* <Route path="/search/:query" element={<SearchResults />}></Route>
        <Route path="/item/:id" element={<ItemPage />}></Route> */}
      </Route>
    </Routes>
  );
}
