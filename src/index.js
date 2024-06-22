import reactDOM from "react-dom/client"
import Home from "./views/Home/Home"
import Product from "./views/Product/Product"
import Blog from "./views/Blog/Blog"
import BlogView from "./views/BlogView/BlogView";
import ProductView from "./views/ProductView/ProductView"



import{
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const root = reactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path : "/",
        element:<Home/>
    },
   
    {
        path : "/Product",
        element:<Product/>
    },
    {
        path : "/Blog",
        element:<Blog/>
    },

    {
        path : "/BlogView/:id",
        element :  <BlogView/>
    },

    {
        path : "/ProductView/:id",
        element:<ProductView/>
    }


])

root.render(
<>
<RouterProvider router={router}/>
</>
)