import Navbar from "./components/shared/Navbar.jsx";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
