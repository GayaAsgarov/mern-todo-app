import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import DashboardLayout from "./pages/DashboardLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <p>Home</p>
      },
      {
        path: 'register',
        element: <h1>Register Page</h1>
      },
      {
        path: 'login',
        element: <h1>Login Page</h1>
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <h1>Dashboard Page</h1>
          },
          {
            path: 'all-todos',
            element: <h1>All todos</h1>
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
