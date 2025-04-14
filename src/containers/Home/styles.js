import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContainerHeader = styled.header`
position: absolute;
z-index: 5;
width: 100%;
background-color: transparent;
`
export const ImageBackGround = styled.div`
  width: 100%;
  height: 100vh; 
  background-image: url(${props => props.img});
  background-size: cover;      
  background-position: center; 
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 0px 0px 50px 60px;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`
export const Info = styled.div`
max-width: 40%;
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 20px;

@media screen and (max-width: 800px) {
  display: grid;
  grid-auto-columns: min-content;
  position: relative;
  top: -15%;
  max-width: 100%;
}
`
export const Title = styled.h1`
color: #fff;
font-size: 40px;
font-weight: 600;

@media screen and (max-width: 800px) {
  font-size: 22px;
}
`
export const Text = styled.p`
color: #fff;
font-size: 20px;
font-weight: 300;

@media screen and (max-width: 800px) {
  font-size: 14px;
}
`
export const Section = styled.div`
background-color: #e7e4e3;
`
export const ContainerBorder = styled.div`
display: flex;
flex-direction: column;
margin-left: 8.5%;

h2 {
color: #000;
font-size: 40px;
font-weight: 600;
margin: 16px 0px;
}

@media screen and (max-width: 800px) {
  
  h2 {
    font-size: 25px;
  }
}
`
export const Border = styled.div`
width: 90%;
border: 2px solid #E9FC16; 
`
export const ContainerInfo = styled.div`
display: flex;
justify-content: center;
align-items: stretch;
gap: 32px;
flex-wrap: wrap;
padding: 32px 0;

@media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
`
export const Container = styled.div`
background-color: #fff;
border-radius: 16px;
padding: 24px;
max-width: 400px;
flex: 1 1 300px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
text-align: center;

  h2 {
    margin: 16px 0 8px;
    font-size: 25px;
    color: #333;
  }

  p {
    font-size: 15px;
    color: #555;
  }

@media screen and (max-width: 800px) {
  margin: 0px 10px 0px 10px;

  h2 {
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
}
`
export const ImgsSection = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 16px;
`
export const Footer = styled.div`
background-color: #000;
`
export const ContainerButtom = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
padding: 20px;

@media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
export const ContainerFooter = styled.div`
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;

h3 {
  font-size: 20px;
  color: #E9FC16;
  text-align: center;
}

p {
  font-size: 15px;
  text-align: center;

 span {
  display: flex;
  flex-direction: column;
}}

li {
  font-size: 15px;
}

`
export const ImgMaps = styled.img`
width: 300px;
margin-top: 20px;
`
export const ImgCards = styled.img`
width: 300px;
margin-top: 20px;
`
export const LinkButton = styled(Link) `
text-decoration: none;
background-color: #E9FC16;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
width: 180px;
height: 40px;

button {
  background-color: #E9FC16;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

&:hover {
    transform: scale(1.05);
    transition: .2s;
}
`


