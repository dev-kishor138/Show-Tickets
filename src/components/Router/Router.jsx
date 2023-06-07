import { createBrowserRouter } from "react-router-dom";
import Shows from "../Shows/Shows";
import ShowDetails from "../ShowDetails/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Shows />,
  },
  {
    path: "show-details/:id",
    element: <ShowDetails />,
    // using params for load data by id
    loader: async ({ params }) =>
      fetch(`https://api.tvmaze.com/shows/${params.id}`),
  },
]);
