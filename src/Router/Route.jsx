import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const MyRoute = createBrowserRouter([
    {
        path : "/",
        element :<Mainlayout></Mainlayout>,
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
        ]
    }
])

export default MyRoute;