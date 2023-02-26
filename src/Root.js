import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import styled from "styled-components";

export default function Root() {
  return (
    <>
    <Navbar />
    <MainDiv>
    <RightFullSide>
        <Search />
       
        <Outlet/>
          
       
      </RightFullSide>
      </MainDiv>
    
   
    
    </>
  )
}


const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const RightFullSide = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  gap: 40px;
  height: 90%;
  margin-left: 15%;
`;

