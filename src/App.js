import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './app.scss'
import { useEffect } from "react";

const Layout = () => {
  return (
    <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
 
]);

function App() {


  // useEffect(() => {
  //   const apiUrl = 'http://localhost:1337/api/products';
  //   const token = '6b0cea9e6885c13a28397e015a3a2bd95040ad84a09cb613ae3819b5c9216d07f26faa5510ad08b9d140f7c8f1c397e7ac7b2e41605b4f436156b084d8133dfa85ac2f9b9221c11a5b1467309d85e22aa3a8265f442737b2dbc0f1c82ed73cd1ccb4817b5ba3420d72ab43ff64e57bb2117c01b942eade6bf63e093007cd9e8a';

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });

  //       // console.log("responseeeeeeeeeeeeeeee", response);
    
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log('API Response:', data);
  //       } else {
  //         console.error('API Request failed:', response.status, response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return <div><RouterProvider router={router} /></div>;
}

export default App;
