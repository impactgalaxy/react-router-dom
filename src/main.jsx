import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';
import Jobs from './Jobs/Jobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './AppliedJobs/AppliedJobs.jsx';
import NestedRouts from './components/NestedRouts/NestedRouts.jsx';
import NestedChild from './components/NestedChild/NestedChild.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../featuredJobsData.json")
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("../featuredJobsData.json")
      },
      {
        path: "/nested-routes",
        element: <NestedRouts></NestedRouts>,
        children: [
          {
            path: "/nested-routes",
            element: <h1>This is a main component</h1>
          },
          {
            path: "/nested-routes/:name",
            element: <NestedChild></NestedChild>
          }

        ]
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
