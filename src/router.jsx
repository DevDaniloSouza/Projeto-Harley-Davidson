import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import FatBob from "./pages/FatBob"
import Sportster from "./pages/Sportster"
import RoadKing from "./pages/RoadKing"
import LowRider from "./pages/LowRider"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/fat-bob-114",
        element: <FatBob />
    },
    {
        path: "/sportster-s",
        element: <Sportster />
    },
    {
        path: "/road-king-special",
        element: <RoadKing />
    },
    {
        path: "/low-rider-s",
        element: <LowRider />
    }
])

export default router