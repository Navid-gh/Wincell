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
import AdminLayout from "./pages/admin/AdminLayout";

const Courses = lazy(() => import("./pages/public/Courses"));
const Articles = lazy(() => import("./pages/public/Articles"));
const Course = lazy(() => import("./pages/public/Course"));
const Article = lazy(() => import("./pages/public/Article"));
const About = lazy(() => import("./pages/public/About"));
const Login = lazy(() => import("./pages/public/Login"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const MyCourses = lazy(() => import("./pages/user/MyCourses"));
const MyLikes = lazy(() => import("./pages/user/MyLikes"));
const MyComments = lazy(() => import("./pages/user/MyComments"));
const MyCertificates = lazy(() => import("./pages/user/MyCertificates"));
const Profile = lazy(() => import("./pages/user/Profile"));

const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));

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
                <Courses />
              </Suspense>
            }
          />
          <Route
            path="articles/"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Articles />
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
            <Route path="likes" element={<MyLikes />} />
            <Route path="comments" element={<MyComments />} />
            <Route path="certificates" element={<MyCertificates />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="admin"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <RequireAuth allowedRoles={["ADMIN"]}>
                  <AdminLayout />
                </RequireAuth>
              </Suspense>
            }
          >
            <Route index element={<AdminDashboard />} />
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
