// React
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Styles
import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
