import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import Github from './components/Github/github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '' element = {<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about/' element={<About/>} />
      <Route path='contact/' element={<Contact/>} />
      <Route path='github/' element={<Github/>} />
    </Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
