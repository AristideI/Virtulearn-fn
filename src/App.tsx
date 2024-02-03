import MainLayout from "./components/MainLayout.jsx";
import HomePage from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
