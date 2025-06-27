import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './components/App.jsx'
import Profile from './components/Profile.jsx';

import Popeye from './components/Popeye.jsx';
import Spinach from './components/Spinach.jsx';

import DefaultProfile from './components/DefaultProfile.jsx';

const router = createBrowserRouter([

  {

    path: "/",
    element: <App />

  },

  {

    path: "profile",
    element: <Profile />,

    // Adding Nested Routes

    children: [

      { path: "popeye", element: <Popeye /> },
      { path: "spinach", element: <Spinach /> },
      
      { index: true, element: <DefaultProfile />}
      
    ]

  }

]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
);