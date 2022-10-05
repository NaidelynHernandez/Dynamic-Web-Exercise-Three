import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";


import './App.css';
import Home from "./pages/Home"; // IMPORTANT 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  // retrieving from home.js 
  },
]);



function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;    //IMPORTANT 
 