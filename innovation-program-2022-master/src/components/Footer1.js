import React from "react";
import logo from "../imgs/logo_azul.png";
import localizacao from "../imgs/localizacao.png";
import telefone from "../imgs/telefone.png";
import horario_comercial from "../imgs/horario_comercial.png";
import styled from 'styled-components';

const Footer1 = () => {

    return (
        <Box>
            <Column>
                        <HomeStyle>
                        <ItemStyle>
                        <ul><img src={logo} alt="Logo MEDLAND" /></ul>
                        </ItemStyle>
                        <ItemStyle>
                        <ul>We are one of the world’s top business consulting firms. We help global leaders with their organization's most critical issues and opportunities. Together, we create enduring change and results.</ul>
                        </ItemStyle>
                        </HomeStyle>
            </Column>
            <Column>
            <ItemStyle>
            <ul>Sobre</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>Time</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>FAQs</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>Serviços</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>Cadastro</ul>
            </ItemStyle>
            </Column>
            
            <Column>
            <ItemStyle>
            <ul><img src={localizacao} alt="localizacao MEDLAND" />1010 Avenue of the Moon, New YorkNY 10018 US.</ul>
            </ItemStyle>
            <ItemStyle>
            <ul><img src={telefone} alt="telefone MEDLAND" />800-2345-6789</ul>
            </ItemStyle>
            <ItemStyle>
            <ul><img src={horario_comercial} alt="horario comercial MEDLAND" />Mon - Sat 8.00 - 18.00. Sunday</ul>
            </ItemStyle>
            </Column>

            <Column>
            <ItemStyle>
            <ul>Inscreva-se na nossa newsletter para saber as novidades</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>E-mail</ul>
            </ItemStyle>
            <ItemStyle>
            <ul>Enviar</ul>
            </ItemStyle>
            </Column>
        </Box>
    );
};
export default Footer1;

const ItemStyle = styled.div`
    padding: 5%;
    img{
        padding-right: 5%;
    }
`;
const HomeStyle = styled.div`
    img{
        width: 100%;
    }
`;

export const Box = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 1%;
    padding-right: 1%;
    height: 290px;
    border-radius: 0px;
    background: #094CFF;
    color:white;
    font-family: philosopher;
    
`;

export const Column = styled.div`
display: inline-block;
width: 25%;
margin-top: 1%;
padding-right: 3%;
`;

