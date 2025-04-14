import styled from "styled-components"

export const Container = styled.div `
background-color: #000;
width: 100%;
min-height: 100vh;
`
export const ContainerInfo = styled.div `
display: flex;
align-items: center;
justify-self: center;
max-width: 50%;
margin: 90px 0;
gap: 30px;
padding-bottom: 20px;

div {
    display: flex;
    flex-direction: column;
    text-align: center;
}
h2 {
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
}

p {
    color: #fff;
    font-size: 15px;
    font-weight: 300;
}

@media screen and (max-width: 800px) {
display: flex;
justify-content: center;
align-items: center;

    h2 {
        font-size: 18px;
    }
    p {
        font-size: 10px;
    }
}
`
export const ImageServico = styled.img `
max-width: 50%;
height: auto;

@media screen and (max-width: 800px) {
    max-width: 200px;
}
`