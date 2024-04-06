import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import "./styles.scss";
import Cryptocurrency from "./components/Cryptocurrency/Cryptocurrency";
import Populations from "./components/Populations/Populations";

const Home = () => {
  return <h1 style={{ textAlign: "center", width: "100%" }}>Home</h1>;
};

const PopulationTracker = () => {
  return <Populations />;
};

const CryptoRates = () => {
  return <Cryptocurrency />;
};

const Wallet = () => {
  return <h1 style={{ textAlign: "center", width: "100%" }}>Wallet</h1>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="populationtracker" element={<PopulationTracker />} />
      <Route path="crypto" element={<CryptoRates />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
