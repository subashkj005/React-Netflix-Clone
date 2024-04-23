import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from "./Components/RowPost/RowPost"
import {action, originals, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries, ActionMovies } from './Components/Constants/constants'

function App() {
  
  return (
    <>
      <Navbar/>
      <Banner />
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Action" isSmall url={action}/>
      <RowPost title="Comedy Movies" url={ComedyMovies}/>
      <RowPost title="Horror Movies" isSmall url={HorrorMovies}/>
      <RowPost title="Romance Movies" url={RomanceMovies}/>
      <RowPost title="Documentaries" isSmall url={Documentaries}/>
      <RowPost title="Action Movies" url={ActionMovies}/>
    </>
  )
}

export default App
