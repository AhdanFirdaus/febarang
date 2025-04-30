import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import ErorPage from './pages/404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>main page</div>,
    errorElement: <ErorPage/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
