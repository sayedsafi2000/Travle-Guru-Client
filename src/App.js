
import './App.css';
import { Router, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Place from './Component/Place';
import Main from './Component/main';
import Home from './Component/Home';
import Login from './Component/Login';
import AllPlace from './Component/AllPlace';
import Hotel from './Component/Hotel';
import SignUp from './Component/SignUp';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Profile from './Component/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",element:<Home></Home>
        },
        
        {
          path:"/place/:id",
          element:<AllPlace></AllPlace>,
          loader:({params})=> fetch(`http://localhost:5000/place/${params.id}`)
          
        },
        {
          path:"/hotel/:id",
          element:<PrivateRoute><Hotel></Hotel></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/hotel/${params.id}`)
        },
        {
          path:"/login",element:<Login></Login>
        },
        {
          path:"/signup",element:<SignUp></SignUp>
        },
        {
          path:"/profile",element:<PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
