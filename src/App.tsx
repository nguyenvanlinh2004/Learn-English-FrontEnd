import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { router } from "./routers/AppRoutes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
