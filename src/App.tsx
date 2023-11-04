import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
