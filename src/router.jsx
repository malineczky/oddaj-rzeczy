import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Logowanie from "./components/Logowanie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logowanie",
    element: <Logowanie />,
  },
]);

export default router;
