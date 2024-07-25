import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import handleTheme from "./utils/handleTheme";
import Loader from "./components/UI/Loader";
import UserLayout from "./pages/user/UserLayout";

const Courses = lazy(() => import("./pages/public/Courses"));
const Course = lazy(() => import("./pages/public/Course"));
const Article = lazy(() => import("./pages/public/Article"));
const About = lazy(() => import("./pages/public/About"));
const Login = lazy(() => import("./pages/public/Login"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

export default function App() {
  handleTheme();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="courses/"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Courses />
              </Suspense>
            }
          />
          <Route
            path="articles/"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="course/:id/:slug"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Course />
              </Suspense>
            }
          />
          <Route
            path="article/:id/:slug"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Article />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <About />
              </Suspense>
            }
          />
          <Route path="dashboard" element={<UserLayout />}></Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
