import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000; 
  }
  
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Poppins", sans-serif;
   height: auto;
}
`

export default GlobalStyle