import React from 'react';
import Home from './Pages/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Login from './Pages/UserLogin/UserLogin';
import Register from './Pages/Registration/Registraion';
import Explore from './Pages/Explore/ExploreAllCards';

import UserForm from './Components/UserForm/UserForm'
import Order from './Components/Order/Order';
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
          path : 'explore',
          element : <Explore />,
         },
        {
          path :'login',
          element:<Login/>,
        },
        {
          path : 'signup',
          element : <Register/>,
        }
     ,
     {
      path : 'userform',
      element : <UserForm/>,
    },
     {
      path : 'order',
      element : <Order/>,
    },

  
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App;
