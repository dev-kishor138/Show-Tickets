import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Shows from "../Shows/Shows";
import ShowDetails from "../ShowDetails/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shows />,
      },
      {
        path: "show-details/:id",
        element: <ShowDetails />,
        loader: async ({ params }) =>
          fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
    ],
  },
]);
