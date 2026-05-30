

import React from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Landingpage from './stores/pages/Landingpage'
import FridgePage from './stores/pages/FridgePage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import MenPage from './stores/pages/MenPage'
import CompPage from './stores/pages/CompPage'
import FurniturePage from './stores/pages/FurniturePage'
import WomanPage from './stores/pages/WomanPage'
import KitchenPage from './stores/pages/KitchenPage'
import WatchPage from './stores/pages/WatchPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import WatchSingle from './singles/WatchSingle'
import WomanSingle from './singles/WomanSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <Landingpage/>}/>
       
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/mens' element={<MenPage/>}/>
        <Route path='/comp' element={<CompPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
         <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/cart' element = {<UserCart />} />
        <Route path='/ac/:id' element={<AcSingle/>}/>
          <Route path='/comp/:id' element={<ComputerSingle/>}/>
           <Route path='/fridge' element={<FridgePage/>}/>
             <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
       <Route path='/mens/:id' element={<MenSingle/>}/>
       <Route path='/watch/:id' element={<WatchSingle/>}/>
       <Route path='/woman/:id' element={<WomanSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
      </Routes>
     
    </div>
  )
}

export default App
