import React from "react"
import { Helmet } from "react-helmet"

import {
  ContainerHeader,
  ImageBackGround,
  Info,
  Title,
  Text,
  Section,
  ContainerBorder,
  Border,
  ContainerInfo,
  Container,
  ImgsSection,
  Footer,
  ContainerButtom,
  ContainerFooter,
  ImgMaps,
  ImgCards,
  LinkButton
} from "./styles"

import FileImages from "../../assets/images"

import Header from "../../components/Header"

function Home() {
  return (
    <>
      <Helmet>
        <title>Auto Mecânica Bernardo</title>
        <meta name="description" content="A mecânica de carro especializada em manutenção e reparo dos sistemas do veículo, garantindo a segurança e o bom funcionamento." />
        <meta name="keywords" content="auto mecânica, manutenção de carros, reparo de veículos, troca de óleo, injeção eletrônica, freios, suspensão" />
        <meta property="og:title" content="Auto Mecânica Bernardo" />
        <meta property="og:description" content="Serviços de manutenção e reparo para seu veículo com qualidade e segurança." />
      </Helmet>

      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ImageBackGround img={FileImages.banners.background}>
        <Info>
          <Title>Auto Mecânica Bernardo</Title>
          <Text>
            A mecânica de carro envolve o estudo, manutenção e reparo dos sistemas que compõem um veículo, como motor, suspensão, freios e transmissão. O mecânico diagnostica falhas, realiza trocas de peças e garante o bom funcionamento do automóvel. Esse trabalho exige conhecimento técnico e atenção aos detalhes para garantir segurança.
          </Text>
          <LinkButton to="https://api.whatsapp.com/send/?phone=5511991710748&text&type=phone_number&app_absent=0" target="_blank">
            <button>Solicitar Orçamento</button>
          </LinkButton>
        </Info>
      </ImageBackGround>

      <Section>
        <ContainerBorder>
          <h2>Prevenção</h2>
          <Border />
        </ContainerBorder>
        <ContainerInfo>
          <Container>
            <ImgsSection src={FileImages.icones.injecao} />
            <h2>Injeção Eletronica</h2>
            <p>A luz de injeção eletrônica acende para alertar sobre problemas no sistema de injeção ou em componentes relacionados, como parte do gerenciamento do motor</p>
          </Container>
          <Container>
            <ImgsSection src={FileImages.icones.oleo} />
            <h2>Troca de Óleo</h2>
            <p>A troca de óleo é uma prática importantíssima para o bom funcionamento do sistema de lubrificação do carro, sendo importante para que o motor funcione de forma correta e evite o desgaste das peças antes do tempo.</p>
          </Container>
          <Container>
            <ImgsSection src={FileImages.icones.freio} />
            <h2>Pastilhas de Freio</h2>
            <p>Ao substituí-las no momento certo, garante-se o funcionamento eficaz do sistema de freios, proporcionando uma frenagem segura e confiável.</p>
          </Container>
        </ContainerInfo>
      </Section>
      <Footer>
        <ContainerButtom>
          <ContainerFooter >
            <h3>Endereço:</h3>
            <p> Av. Comendador Feiz Zarzur, 621 - <span>Jardim Cidade Pirituba, São Paulo - SP, 02941-030</span></p>
            <p>(11) 99171-0748</p>
            <p style={{
              color: "#E9FC16",
              fontSize: 20,
              fontWeight: 600,
              marginTop: 30
            }}>
              Pagamentos:
            </p>
            <ImgCards src={FileImages.icones.card} />
          </ContainerFooter>
          <ContainerFooter >
            <h3>Serviços:</h3>
            <ul>
              <li>Manutenção Preventiva</li>
              <li>Manutenção Preditiva</li>
              <li>Manutenção Corretiva</li>
              <li>Troca de Óleo de Cambio Automático</li>
              <li>Troca de Óleo</li>
              <li>Troca de Pastilhas de Freio</li>
              <li>Reparo de Suspenção</li>
              <li>Reparo de Embreagens</li>
            </ul>
          </ContainerFooter>
          <ContainerFooter >
            <h3>Localização:</h3>
            <a href="https://www.google.com/maps/place/Auto+Mecanica+Bernardo/@-23.4779687,-46.7210339,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef96e7f4523d7:0xbc9e084caa09b5ab!8m2!3d-23.4779687!4d-46.7210339!16s%2Fg%2F11dynpz047?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
              <ImgMaps src={FileImages.icones.maps} />
            </a>
          </ContainerFooter>
        </ContainerButtom>


      </Footer>
    </>
  )
}

export default Home
