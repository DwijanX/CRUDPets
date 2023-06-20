import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/Home.jsx'
import RegisterPet from './screens/registerPet.jsx'
import ModifyPet from './screens/modifyPet.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "register/",
    element: <RegisterPet />,
  },
  {
    path: "update/:id",
    element: <ModifyPet />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
