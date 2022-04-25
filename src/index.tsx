import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LocationContextProvider from "./context/locationContext";

ReactDOM.render(
  <BrowserRouter>
    <LocationContextProvider>
      <App />
    </LocationContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
