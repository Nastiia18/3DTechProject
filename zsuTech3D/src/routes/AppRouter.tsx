import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Tech1Page from "../pages/technics1/Tech1Page";
import Tech2Page from "../pages/technics2/Tech2Page";
import Tech3Page from "../pages/technics3/Tech3Page";
import NotFoundPage from "../components/NotFoundPage";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/home/HomePage";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/tech1" element={<Tech1Page />} />
      <Route path="/tech2" element={<Tech2Page />} />
      <Route path="/tech3" element={<Tech3Page />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={route} />;
};

export default AppRouter;
