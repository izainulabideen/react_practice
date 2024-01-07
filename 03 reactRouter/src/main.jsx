import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Github, Home, User } from "./components";
import { GithubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },{
//         path: "github",
//         element: <Github />
//       },
//     ],
//   },
// ]);

// Second Method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route loader={GithubInfoLoader } path="github" element={<Github />}/>
      <Route path="user/:userid" element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
