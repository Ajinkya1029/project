import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/homepage';
import Gif from './pages/gif';
import YesNoDiv from './pages/yesnodiv';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomePage></HomePage>
    },
    {
        path:'leftgoal',
        element:<Gif></Gif>
    },
    {
        path:'rightgoal',
        element:<YesNoDiv></YesNoDiv>
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>


)