import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import handleTheme from "./utils/handleTheme";
import Loader from "./components/UI/Loader";
import UserLayout from "./pages/user/UserLayout";
import RequireAuth from "./utils/RequireAuth";
import { useInitialAuth, useInitialBasketProducts } from "./hooks/useAuth";
import Logo from "./components/UI/icons/Logo";
import AdminLayout from "./pages/admin/AdminLayout";

const CoursesPage = lazy(() => import("./pages/public/Courses"));
const ArticlesPage = lazy(() => import("./pages/public/Articles"));
const Course = lazy(() => import("./pages/public/Course"));
const Article = lazy(() => import("./pages/public/Article"));
const About = lazy(() => import("./pages/public/About"));
const Contact = lazy(() => import("./pages/public/Contact"));
const Login = lazy(() => import("./pages/public/Login"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const MyCourses = lazy(() => import("./pages/user/MyCourses"));
const MyLikes = lazy(() => import("./pages/user/MyLikes"));
const MyComments = lazy(() => import("./pages/user/MyComments"));
const MyCertificates = lazy(() => import("./pages/user/MyCertificates"));
const Profile = lazy(() => import("./pages/user/Profile"));
const Basket = lazy(() => import("./pages/user/Basket"));
const Invoice = lazy(() => import("./pages/user/Invoice"));
const PaymentFailed = lazy(() => import("./pages/user/PaymentFailed"));

const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const Courses = lazy(() => import("./pages/admin/Courses"));
const Articles = lazy(() => import("./pages/admin/Articles"));
const Categories = lazy(() => import("./pages/admin/Categories"));
const Certificates = lazy(() => import("./pages/admin/Certificates"));
const Slides = lazy(() => import("./pages/admin/Slides"));
const Codes = lazy(() => import("./pages/admin/Codes"));
const Upload = lazy(() => import("./pages/admin/Upload"));
const Tickets = lazy(() => import("./pages/admin/Tickets"));
const Sales = lazy(() => import("./pages/admin/Sales"));
const Users = lazy(() => import("./pages/admin/Users"));
const Chapters = lazy(() => import("./pages/admin/Chapters"));
const Comments = lazy(() => import("./pages/admin/Comments"));
const Faq = lazy(() => import("./pages/admin/Faq"));
const Add = lazy(() => import("./pages/admin/Add"));
const Edit = lazy(() => import("./pages/admin/Edit"));

export default function App() {
  const isReady = useInitialAuth();
  handleTheme();
  useInitialBasketProducts();
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
            path="courses"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <CoursesPage />
              </Suspense>
            }
          />
          <Route
            path="articles"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <ArticlesPage />
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
            path="contact-us"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Contact />
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
            <Route path="basket" element={<Basket />} />
            <Route path="basket/:id" element={<Invoice />} />
            <Route path="payment-failed" element={<PaymentFailed />} />
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
            <Route path="courses" element={<Courses />} />
            <Route path="articles" element={<Articles />} />
            <Route path="categories" element={<Categories />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="sales" element={<Sales />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="users" element={<Users />} />
            <Route path="slides" element={<Slides />} />
            <Route path="codes" element={<Codes />} />
            <Route path="upload" element={<Upload />} />
            <Route path=":parent/chapters" element={<Chapters />} />
            <Route path=":parent/comments" element={<Comments />} />
            <Route path=":parent/faq" element={<Faq />} />
            <Route path=":parent/add" element={<Add />} />
            <Route path=":parent/edit" element={<Edit />} />
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


