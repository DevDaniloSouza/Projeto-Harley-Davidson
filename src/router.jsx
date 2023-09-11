import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import FatBob from "./pages/FatBob"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/fat-bob-114",
        element: <FatBob />
    }
])

export default router