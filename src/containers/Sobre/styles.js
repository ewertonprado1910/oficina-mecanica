import styled from "styled-components"

export const Container = styled.div `
background-color: #000;
height: 100vh;

h1 {
    color: #E9FC16;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0;
}

p {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin: 50px 0;
    padding: 0 50px;
    text-align: center;
}

@media screen and (max-width: 800px) {
    height: 100%;
    
    h1 {
        font-size: 20px;
    }
    p {
        font-size: 12px;
    }
    
}
`