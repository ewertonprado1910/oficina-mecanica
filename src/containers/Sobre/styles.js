import styled from "styled-components"

export const Container = styled.div `
background-color: #000;
width: 100%;
min-height: 100vh; 
overflow: auto;

h1 {
    color: #E9FC16;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin-top: 40px;
}

@media screen and (max-width: 800px) {
    height: 100%;
    
    
    h1 {
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
`
export const ContainerInfo = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px 22px;
gap: 30px;

p {
    color: #fff;
    font-size: 18.5px;
    font-weight: 300;
    text-align: center;
    max-width: 900px;
}

@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;

    p {
        font-size: 12px;
    }
}
`
export const Image = styled.img `
max-width: 600px;
width: 100%;
height: auto;

  @media screen and (max-width: 800px) {
    display: none;
  }
`