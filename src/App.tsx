import { useQuery } from "@apollo/client";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MainLoader from "./components/Loaders/MainLoader";
import ThemeLayout from "./components/Shared/ThemeLayout";
import { GET_USERS } from "./configs/queries";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const App = () => {

  const { data: user, loading: userLoading, error: userError } = useQuery(GET_USERS);

  console.log(user, userLoading, userError);


  // Define routes for the app
  const routes = [
    {
      path: "/",
      element: userLoading ? <MainLoader /> : <Outlet />,
      children: [
        {
          path: "",
          element: userError ? <Navigate to="/auth" /> : <Outlet />,
          children: [
            {
              index: true,
              element: <Home />
            }
          ]
        },
        {
          path: "auth",
          element: user ? <Navigate to="/" /> : <Auth />,
        }
      ],
    },
  ];

  // render all routes using useRoutes hook
  const renderRoutes = useRoutes(routes);

  return (
    <ThemeLayout>
      {renderRoutes}
    </ThemeLayout>
  );
}

export default App;
