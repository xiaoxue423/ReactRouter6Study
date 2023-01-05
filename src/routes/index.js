import {lazy} from 'react'
import { Navigate } from "react-router-dom";
import lazyLoad from '../components/LazyLoad'

// import About from "../pages/About.jsx";
const About = lazy(()=>import('../pages/About.jsx'))
const Home = lazy(()=>import('../pages/Home.jsx'))
const Message = lazy(()=>import('../pages/Message.jsx'))
const Detail = lazy(()=>import('../pages/Detail.jsx'))
const News = lazy(()=>import('../pages/News.jsx'))

// import Home from "../pages/Home.jsx";
// import News from "../pages/News.jsx";
// import Message from "../pages/Message.jsx";
// import Detail from "../pages/Detail.jsx";


const routes = [
  { path: "/about", element: lazyLoad(About) },
  {
    path: "/home",
    element: lazyLoad(Home),
    children: [
      { path: "news", element: lazyLoad(News) },
      { path: "message", element: lazyLoad(Message),children: [
        { path: "detail", element: lazyLoad(Detail)}
      ]},
    ],
  },
  { path: "/", element: <Navigate to="/about" /> },
];

export default routes;
