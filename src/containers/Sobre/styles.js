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
    margin-bottom: 70px;
}

p {
    color: #fff;
    font-size: 18.5px;
    font-weight: 300;
    margin-bottom: 50px;
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
        margin-top: 150px;
    }
    
}
`
export const ContainerInfo = styled.div `
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 50px;

@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
}
`
export const Image = styled.img `
max-width: 600px;
height: auto;

@media screen and (max-width: 800px) {
    max-width: 250px;
    padding-bottom: 20px;
}
`