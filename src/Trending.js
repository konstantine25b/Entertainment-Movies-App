import React from "react";
import data from "./data.json";
import styled from "styled-components";
import MovieCategory from "./assets/icon-category-movie.svg";
import SeriesCategory from "./assets/icon-category-tv.svg";
import onBookmark from "./assets/icon-bookmark-full.svg";
import offBookmark from "./assets/icon-bookmark-empty.svg";

export default function Trending() {
    
  return (
    <TrendingMoviesList>
      {data.map((items, index) => {
        return items.isTrending ? (
          <MovieImageContainer key={index + 120}>
            <TrendingImage

              src={require(`${data[index].thumbnail.trending.large}`)}
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
        ) : null;
      })}
    </TrendingMoviesList>
  );
}

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 100;
`;

const TrendingMoviesList = styled.div`
  height: 200px;
  width: 100%;
  padding: 10px;
  gap: 10px;
  display: flex;
`;
const MovieImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TrendingImage = styled.img`
  width: 230px;
  height: 130px;
`;
const TrendingImageDesc = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 80px;
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
