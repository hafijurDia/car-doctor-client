import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
       {
        path: "/",
        element: <Home></Home>
       },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        path: "/signup",
        element: <SignUp></SignUp>
       },
       {
        path: "/services",
        element: <Services></Services>
       },
       {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) => {
          // Fetching the specific service
          const response = await fetch(`http://localhost:5000/services/${params.id}`);
          if (!response.ok) {
              throw new Response("Service Not Found", { status: 404 });
          }
          const service = await response.json();
      
          // Fetching all services
          const allServicesResponse = await fetch(`http://localhost:5000/services`);
          if (!allServicesResponse.ok) {
              throw new Response("Failed to load services", { status: 500 });
          }
          const allServices = await allServicesResponse.json();
      
          return { service, allServices }; // Return both the specific service and all services
      }
       },
      ]
    },
  ]);

export default router;
