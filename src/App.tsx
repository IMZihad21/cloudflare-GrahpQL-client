import { Outlet, useRoutes } from "react-router-dom";
import ThemeLayout from "./components/Shared/ThemeLayout";
import Home from "./pages/Home";

const App = () => {
  // Define routes for the app
  const routes = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Home />,
        },
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
