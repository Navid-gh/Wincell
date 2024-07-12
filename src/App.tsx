import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import handleTheme from "./utils/handleTheme";
import Loader from "./components/UI/Loader";
import UserLayout from "./pages/user/UserLayout";
import RequireAuth from "./utils/RequireAuth";
import { useInitialAuth } from "./hooks/useAuth";
import Logo from "./components/UI/icons/Logo";

const Course = lazy(() => import("./pages/public/Course"));
const Article = lazy(() => import("./pages/public/Article"));
const About = lazy(() => import("./pages/public/About"));
const Login = lazy(() => import("./pages/public/Login"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const MyCourses = lazy(() => import("./pages/user/MyCourses"));

export default function App() {
  const isReady = useInitialAuth();
  handleTheme();
  if (!isReady)
    return (
      <Logo className="w-24 h-w-24 animate-pulse text-center m-auto mt-4" />
    );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="courses/"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Home />
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
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <RequireAuth allowedRoles={["USER", "ADMIN"]}>
                  <UserLayout />
                </RequireAuth>
              </Suspense>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<MyCourses />} />
          </Route>
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
