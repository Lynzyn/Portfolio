import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: ProjectDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
