import React from 'react'
import data from "./data.json";
import styled from "styled-components";
import MovieCategory from "./assets/icon-category-movie.svg";
import SeriesCategory from "./assets/icon-category-tv.svg";
import onBookmark from "./assets/icon-bookmark-full.svg";
import offBookmark from "./assets/icon-bookmark-empty.svg";

export default function Recomended() {
  return (
    <RecomendedMoviesList>
                {data.map((item,index)=>{
                    return ( <MovieImageContainer key ={index}>
                        <TrendingImage
            
                          src={require(`${data[index].thumbnail.regular.large}`)}
                        />
            
                        <TrendingImageDesc>
                          <TrendingImageCeskTop>
                            <p>{data[index].year} . </p>
                            <img
                              src={
                                data[index].category == "Movie"
                                  ? MovieCategory
                                  : SeriesCategory
                              }
                            />
                            <p> {data[index].category} . </p>
                            <p> {data[index].rating} </p>
                          </TrendingImageCeskTop>
                          <H2>{data[index].title}</H2>
                        </TrendingImageDesc>
                        <Bookmark
                          src={data[index].isBookmarked ? onBookmark : offBookmark}
                        />
                      </MovieImageContainer>
            )
                })}

            </RecomendedMoviesList>
  )
}


const RecomendedMoviesList = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 5px;
`

const MovieImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 250px;
`;
const TrendingImage = styled.img`
  width: 230px;
  height: 130px;
`;
const TrendingImageDesc = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 190px;
  margin-left: 10px;
`;
const TrendingImageCeskTop = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 100;
  font-size: 13px;
`;
const Bookmark = styled.img`
  position: absolute;
  margin-top: -80px;
  margin-left: 190px;
`;
const H2 = styled.h2`
  font-size: 18px;
  font-weight: 100;
`;