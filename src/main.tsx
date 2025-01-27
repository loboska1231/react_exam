import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {routes} from "./routes/routes.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
