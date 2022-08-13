import Home from "pages/Home/Home";
import About from "pages/About/About";
import Error from "pages/Error/ErrorPage";
import Rent from "pages/Rent/Rents";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/Rent/:id",
    element: <Rent />,
    exact: true,
  },
  {
    path: "/about",
    element: <About />,
    exact: true,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
