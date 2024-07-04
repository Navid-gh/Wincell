import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import handleTheme from "./utils/handleTheme";

const About = lazy(() => import("./pages/public/About"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

export default function App() {
  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
