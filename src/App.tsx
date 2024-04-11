import MainLayout from "./components/MainLayout.jsx";
import AboutPage from "./pages/AboutPage.js";
import HomePage from "./pages/Home.jsx";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound.jsx";
import authLoader from "./loaders/authLoader.js";
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
import { Toaster } from "react-hot-toast";
import AddBlog from "./pages/AddBlog.js";
import AddCourse from "./pages/AddCourse.js";
import Messages from "./pages/Messages.js";
import ShowBlog from "./pages/ShowBlog.js";
import LearnCourse from "./pages/LearnCourse.js";
import ProfilePage from "./pages/Profile.js";
import SettingsPage from "./pages/Settings.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} loader={authLoader} />
        <Route path="signup" element={<Signup />} loader={authLoader} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blogs/:id" element={<ShowBlog />} />
        <Route path="blogs/add" element={<AddBlog />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<LearnCourse />} />
        <Route path="/courses/add" element={<AddCourse />} />
        <Route path="messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}
