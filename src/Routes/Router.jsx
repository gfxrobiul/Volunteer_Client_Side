import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddVolunteerPost from "../Pages/AddVolunteerPost/AddVolunteerPost";
import NeedVolunteerPage from "../Pages/NeedVolunteerPage/NeedVolunteerPage";
import AllVolunteerDetails from "../Pages/NeedVolunteerPage/AllVolunteerDetails";
import MyMangePost from "../Pages/MyMangePost/MyMangePost";
import UpdateManagePost from "../Pages/MyMangePost/UpdateManagePost";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import BeVolunteer from "../Pages/BeVolunteer/BeVolunteer";




const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
    {
        path: "/",
        element: <Home></Home>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path: '/addvoluneteer',
      element: <PrivateRoute> <AddVolunteerPost></AddVolunteerPost> </PrivateRoute>,
    },
    {
      path:'/NeedVolunteer',
      element: <NeedVolunteerPage></NeedVolunteerPage>
    },
    {
      path:'/volunteersdetails/:id',
      element: <PrivateRoute> <AllVolunteerDetails></AllVolunteerDetails>  </PrivateRoute>,
      loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addvolenteer/${params.id}`),
    },
    {
      path:'/manageMyPost',
      element: <PrivateRoute> <MyMangePost></MyMangePost>  </PrivateRoute>,
    },
    {
      path:'/updateManagePost/:id',
      element: <PrivateRoute> <UpdateManagePost></UpdateManagePost>  </PrivateRoute>,
      loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addvolenteer/${params.id}`),
    },
    {
      path:'/bevolunteer',
      element: <PrivateRoute> <BeVolunteer></BeVolunteer> </PrivateRoute>,
    }
   
    ]
    },
  ]);

export default Router;