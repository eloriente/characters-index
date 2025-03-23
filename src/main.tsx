/*** Vendors ***/
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

/*** Layouts ***/
import RootLayout from "./ui/layouts/RootLayout";

/*** Global Styles ***/
import Styles from "./ui/components/commons/globals";

/*** Views ***/
import App from "./ui/pages/home/App";

createRoot(document.getElementById("root")!).render(
  <>
    <Styles />
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="/character/:id" element={<h1>Details</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
