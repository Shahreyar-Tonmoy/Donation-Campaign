import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import CardDetails from "../Pages/Card Details/CardDetails";


const MyRoute = createBrowserRouter([
    {
        path : "/",
        element :<Mainlayout></Mainlayout>,
        errorElement :<Error></Error>,
        children :[
            {
                path : "/",
                element : <Home></Home>,
                loader :()=> fetch('./Donation.json')
            },
            {
                path : "/Donation",
                element : <Donation></Donation>
            },
            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/Donation/:id",
                element : <CardDetails></CardDetails>,
                loader :()=> fetch('./Donation.json')
                
            },
        ]
    }
])

export default MyRoute;