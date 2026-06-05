import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";

import Layout from "./pages/layout";
import Notfound from "./pages/Notfound/Notfound";
import BlogDeatails from "./pages/BlogDetails/BlogDetails";

function App() {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:id", element: <BlogDeatails /> },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return(
    <>
    
   <RouterProvider router={myrouter} />
   </>
   )
}

export default App;
