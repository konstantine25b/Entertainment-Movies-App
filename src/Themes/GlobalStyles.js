import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    
  }
  body{
  
    font-size:16px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export default GlobalStyles;
