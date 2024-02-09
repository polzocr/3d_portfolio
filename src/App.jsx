import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"

import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

import Layout from "./pages/Layout/index"
import Home from "./pages/Home/index"
import ErrorPage from "./pages/ErrorPage/index"
import Cv from './pages/Cv/index'

// export default function App() {

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <Tech />
//         <Works />
//         <About /> 
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

const router = 
createBrowserRouter(
    
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >
                <Route index element={<Home />} />
                <Route path='/cv' element={<Cv />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </>
    )               
)

export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}

