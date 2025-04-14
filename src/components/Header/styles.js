import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
background-color: #000;
width: 100%;
height: 90px;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 800px) {
  height: 70px;
  display: flex;
  justify-content: center;
}
`
export const Headerlinks = styled.div`
display: flex;
gap: 100px;

@media screen and (max-width: 800px) {
  display: flex;
  gap: 30px;
}
`
export const StyleLink = styled(Link)`
color: #fff;
text-decoration: none;

&:hover {
    font-size: 18px;
    transform: scale(1.05);
    transition: .2s;
}
${({ active }) => 
 active && 

`
border-bottom: 2px solid #E9FC16;
color: #fff;
`
}
`