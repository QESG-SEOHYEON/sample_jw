import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurESGApproach from "./pages/OurESGApproach";
import Governance from "./pages/Governance";
import Environmental from "./pages/Environmental";
import Social from "./pages/Social";
import Appendix from "./pages/Appendix";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "our-esg-approach", Component: OurESGApproach },
      { path: "governance", Component: Governance },
      { path: "environmental", Component: Environmental },
      { path: "social", Component: Social },
      { path: "appendix", Component: Appendix },
    ],
  },
]);
