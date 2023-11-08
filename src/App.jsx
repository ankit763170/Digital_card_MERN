import React from 'react';
import Home from './Pages/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Login from './Pages/UserLogin/UserLogin';
import Register from './Pages/Registration/Registraion';
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path :'login',
          element:<Login/>,
        },
        {
          path : 'signup',
          element : <Register/>,
        }
     
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
