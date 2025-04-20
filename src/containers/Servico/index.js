import React from "react"

import Header from "../../components/Header"
import { Container, ContainerInfo, ImageServico } from "./styles"
import FileImages from "../../assets/images"

function Servico() {
    return (
        <Container>
            <Header />
            <ContainerInfo>
                <div>
                    <h2>Reparos em Embreagens</h2>
                    <p>O sistema de embreagem é vital para uma troca de marchas suave e eficiente. Realizamos diagnósticos precisos para identificar quaisquer problemas na embreagem e oferecemos soluções eficazes.
                        Nosso objetivo é assegurar que seu veículo tenha uma resposta rápida e eficiente ao trocar de marcha, proporcionando uma condução mais fluida e evitando danos futuros ao sistema de transmissão.
                    </p>
                </div>
                <ImageServico src={FileImages.servicos.embreagem} />
            </ContainerInfo>
            <ContainerInfo>
                <ImageServico src={FileImages.servicos.suspencao} />
                <div>
                    <h2>Reparos de Suspenção</h2>
                    <p>A suspensão do seu veículo é crucial para a estabilidade e o conforto durante a condução. Aqui na Auto Mecânica Bernardo oferecemos serviços completos de reparo e manutenção de suspensão, abordando desde componentes desgastados até ajustes finos que melhoram a resposta e a segurança do veículo.

                        Trabalhamos para que cada viagem seja suave, sem solavancos, e que você tenha total controle ao dirigir, mesmo nas estradas mais desafiadoras.
                    </p>
                </div>
            </ContainerInfo>
            <ContainerInfo>
                <div>
                    <h2>Troca de Óleo de Câmbio Automático</h2>
                    <p>A troca de óleo do câmbio automático é essencial para manter a longevidade e o bom funcionamento do sistema. Usamos penas produtos de alta qualidade, especificamente formulados para garantir a lubrificação adequada das peças internas do câmbio.
                        Nosso serviço é meticuloso, assegurando que cada componente seja protegido contra o desgaste prematuro, contribuindo para uma vida útil prolongada do câmbio e para uma experiência de condução mais segura e confortável.
                    </p>
                </div>
                <ImageServico src={FileImages.servicos.cambio} />
            </ContainerInfo>
            <ContainerInfo>
                <ImageServico src={FileImages.servicos.motor} />
                <div>
                    <h2>Manutenção de Motores Flex</h2>
                    <p>Motores flex exigem um cuidado especializado devido à sua capacidade de operar com diferentes tipos de combustíveis. Operamos na manutenção desses motores, garantindo que seu veículo tenha um desempenho eficiente, seja qual for o combustível utilizado.
                        Utilizamos ferramentas e técnicas de última geração para identificar problemas potenciais e realizar os reparos necessários, assegurando que seu motor opere de maneira confiável e potente.
                    </p>
                </div>
            </ContainerInfo>

        </Container>

    )
}

export default Servico