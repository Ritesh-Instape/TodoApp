import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Todocontextprovider from "./Context/Todocontextprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <Todocontextprovider>
    <App />
  </Todocontextprovider>
);
