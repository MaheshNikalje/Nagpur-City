import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import FamousSpots from './components/FamousSpots.jsx'
import FamousFoods from './components/FamousFoods.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>  
      
      <Route path="" element={<Home/>}/>
      <Route path="spots" element={<FamousSpots/>}/>
      <Route path="foods"element={<FamousFoods/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
