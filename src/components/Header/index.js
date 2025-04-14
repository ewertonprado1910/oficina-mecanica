import React from "react"
import { useLocation } from "react-router-dom"

import { Container, Headerlinks, StyleLink } from "./styles"

function Header() {
    const location = useLocation()
    
    return (
        <Container>
            <Headerlinks>
                <StyleLink to="/" active={location.pathname === "/"}>Inicio</StyleLink>
                <StyleLink to="/servico" active={location.pathname === "/servico"}>Serviços</StyleLink>
                <StyleLink to="/sobre" active={location.pathname === "/sobre"}>Sobre</StyleLink>
                <StyleLink to="https://api.whatsapp.com/send/?phone=5511991710748&text&type=phone_number&app_absent=0" target="_blank">
                    Contato
                </StyleLink>
            </Headerlinks>
        </Container>

    )
}

export default Header