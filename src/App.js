import { ThemeProvider } from "styled-components";
import AllMoviesPage from "./AllMoviesPage";
import Root from "./Root";
import { defaultThemes } from "./Themes/defaultThemes";
import GlobalStyles from "./Themes/GlobalStyles";
import React,{createContext,useState} from 'react'



import {RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from "react-router-dom"
import MoviesPage from "./MoviesPage";
import TVSeries from "./TVSeries";
import Bookmarked from "./BookmarkedPage"

export const UserContext = createContext(null)
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index = {true} element={<AllMoviesPage/>}/>
        <Route path='movies' element={<MoviesPage/>}/>
        <Route path='tv-series' element={<TVSeries/>}/>
        <Route path='bookmarks' element={<Bookmarked/>}/>
          
      </Route>
    ) 
  )


function App() {
  return (
   

  
   <ThemeProvider theme = {defaultThemes}>
    <GlobalStyles/>
    <RouterProvider router = {router}/>
   </ThemeProvider>
  );
}

export default App;
