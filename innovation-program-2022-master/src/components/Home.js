import React from 'react';
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import HeaderHome from "./Header";
import fornecedor from "../imgs/fornecedor.png";
import styled from 'styled-components';

export default function Home(props){

    return(
        <HomeStyle>
            <HeaderHome userName={props.userName} ></HeaderHome>
            <CapaStyle>
                <img src={fornecedor} alt="Página do fornecedor" />
            </CapaStyle>
            <ServicesStyle>
            <SubTituloStyle>Feito para você!</SubTituloStyle>
            <TituloStyle>Conteúdos</TituloStyle>
            <DescricaoStyle>MEDLAND é uma plataforma onde a informação é centralizada e organizada o suficiente para que todos possam ter acesso.
Temos desde indicações de leitura e enciclopédia virtual de termos básicos até artigos científicos e relatórios técnicos.
Tudo isso à um clique de distância ...</DescricaoStyle>
            </ServicesStyle>
            <NewsStyle>
            <SubTituloStyle>Atualizações diárias</SubTituloStyle>
            <TituloStyle>Novidades</TituloStyle>
            <DescricaoStyle>Saiba tudo que está acontecendo sobre saúde no Brasil. É um bom hábito, porque a leitura diária dos periódicos, impressos ou virtuais, nos mantém em dia com o que vai pelo mundo e nos dá informações úteis para o trabalho, os negócios, o lazer.</DescricaoStyle>
            </NewsStyle>
            <Footer1></Footer1>
            <Footer2></Footer2>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow: scroll;
        
`;
const CapaStyle = styled.div`
    display: flex;
    margin-top:80px;
    flex-direction: center;
    margin-left:15%;
    img{width: 90%;}
`;

const ServicesStyle = styled.div`
    display: flex;
    flex-direction: column;
    background: #DDE0EA;
    align-item:center;
    width: 100%;
    height: 800px;
`;
const SubTituloStyle = styled.div`
   display: flex;
flex-direction: column;
font-family: philosopher;
font-size: 15px;
color:#094CFF;
text-align: center;
color: #8B8E96;
padding-top: 3%;
`;
const TituloStyle = styled.div`
    display: flex;
    flex-direction: column;
    font-family: philosopher;
    font-size: 50px;
    color:#094CFF;
    text-align: center;
    padding-bottom: 3%;
`;
const DescricaoStyle = styled.div`
display: flex;
flex-direction: column;
font-family: philosopher;
font-size: 15px;
color:#094CFF;
text-align: center;
padding-left: 10%;
padding-right: 10%;
`;

const NewsStyle = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFF;
    align-item:center;
    width: 100%;
    height: 800px;
`;

