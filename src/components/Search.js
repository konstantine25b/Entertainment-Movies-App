import React from 'react'
import searchIcon from "../assets/icon-search.svg";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Search() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <SearchSide>
          <img src={searchIcon} />
          <SearchDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SearchInput placeholder='Search for movies or TV series'
                {...register("searchInfo", { required: true, })}
              />
             
            </form>
          </SearchDiv>
        </SearchSide>
  )
}

const SearchSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const SearchDiv = styled.div`
  width: 95%;
  border-bottom: 1px solid ${(props)=>props.theme.colors.gray};
`;

const SearchInput = styled.input`
all: unset;
width: 90%;
font-size: 20px;


`