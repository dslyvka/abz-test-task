// React
import ReactDOM from "react-dom/client";

// Libraries
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// Components
import App from "./App";

// Styles
import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

root.render(<App />);
