import React, { useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import categoryFull from "../assets/home-icon-white.svg";
import categoryEmpty from "../assets/icon-nav-home.svg";
import categoryMovie from "../assets/icon-nav-movies.svg";
import categoryMovieEmpty from '../assets/categoryMovieEmpty.svg'

import categoryTV from "../assets/icon-nav-tv-series.svg";
import categorySeriesEmpty from '../assets/categorySeriesEmpty.svg'
import categoryBookmark from "../assets/icon-nav-bookmark.svg";
import bookmarkEmpty from '../assets/bookmarkEmpty.svg'
import avatarImg from "../assets/image-avatar.png";

export default function Navbar() {
  const navigate = useNavigate();

  const [homeIcon, setHomeIcon] = useState(categoryFull);

  const page = useRef(0)
  return (
    <NavBar>
      <NavBarContent>
        <NavBarUpper>
          <img src={logo} />
          <NavBarItems>
            <CategoryImg
              onClick={() => {
                navigate("/");
                page.current=0;
                console.log(page.current)
              }}
              src={page.current== 0? categoryFull: categoryEmpty }
            />
            <CategoryImg
              onClick={() => {
                navigate("/movies");
                page.current=1;
                console.log(page.current)
              }}
              src={page.current == 1?categoryMovieEmpty: categoryMovie }
            />
            <CategoryImg
              onClick={() => {
                navigate("/tv-series");
                page.current=2;
                console.log(page.current)
              }}
              src={page.current == 2? categorySeriesEmpty: categoryTV}
            />
            <CategoryImg
              onClick={() => {
                navigate("/bookmarks");
                page.current=3;
              }}
              src={page.current ==3?bookmarkEmpty: categoryBookmark}
            />
          </NavBarItems>
        </NavBarUpper>
        <NavBarLower>
          <AvatarImg src={avatarImg} />
        </NavBarLower>
      </NavBarContent>
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 3%;
  border-radius: 10%;
  position: fixed;
  z-index: 1;
`;
const NavBarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: ${(props) => props.theme.colors.lighterBlue};
`;
const NavBarUpper = styled.div``;
const NavBarLower = styled.div``;
const NavBarItems = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CategoryImg = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
`;
