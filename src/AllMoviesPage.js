import React from "react";
import styled from "styled-components";



import Trending from "./Trending";
import data from "./data.json";
import Recomended from "./Recomended";


export default function AllMoviesPage() {
  return (
    
      

      
        <MoviesDiv>
          <TrendingMovies>
            <H1>Trending</H1>
            <Trending />
          </TrendingMovies>
          <RecomendedMovies>
            <H1>Recomended for you</H1>
            <Recomended/>
            
          </RecomendedMovies>
        </MoviesDiv>
      
    
  );
}




const MoviesDiv = styled.div`
  display: flex;
  width: 97%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TrendingMovies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const RecomendedMovies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 200;
`;

