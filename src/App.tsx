import MainLayout from "./components/MainLayout.jsx";
import AboutPage from "./pages/AboutPage.js";
import HomePage from "./pages/Home.jsx";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup.js";
import BlogPage from "./pages/BlogsPage.js";
import ContactPage from "./pages/Contact.js";
import CoursesPage from "./pages/Courses";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
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
