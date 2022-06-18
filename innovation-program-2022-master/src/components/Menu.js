import React from 'react';
import Header from "./Header";
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";


export default function Menu(){
    const location = useLocation();
    const history = useNavigate();

    function handleClickContato(){
        if(location.pathname == "/contato"){
            history(-1);
        }
        else{
            history("/contato")
        }
    }
    function handleClickHome(){
            if(location.pathname == "/home"){
                history(-1);
            }
            else{
                history("/home")
            }
        }
    function handleClickLogin(){
                if(location.pathname == "/login"){
                    history(-1);
                }
                else{
                    history("/login")
                }
            }
    function handleClickPagCidadao(){
                    if(location.pathname == "/pagCidadao"){
                        history(-1);
                    }
                    else{
                        history("/pagCidadao")
                    }
                }
    function handleClickPagColaboradores(){
                        if(location.pathname == "/pagColaboradores"){
                            history(-1);
                        }
                        else{
                            history("/pagColaboradores")
                        }    
    }
    function handleClickPagControlFiscal(){
        if(location.pathname == "/pagControlFiscal"){
            history(-1);
        }
        else{
            history("/pagControlFiscal")
        }    
}
function handleClickPagFornecedor(){
    if(location.pathname == "/pagFornecedor"){
        history(-1);
    }
    else{
        history("/pagFornecedor")
    }    
}
function handleClickPagGestor(){
    if(location.pathname == "/pagGestor"){
        history(-1);
    }
    else{
        history("/pagGestor")
    }    
}
function handleClickPagParceiros(){
    if(location.pathname == "/pagParceiros"){
        history(-1);
    }
    else{
        history("/pagParceiros")
    }    
}
function handleClickSobre(){
    if(location.pathname == "/sobre"){
        history(-1);
    }
    else{
        history("/sobre")
    }    
}

    return(
        <Box>
            <Header/>
            <MenuStyle>
                <HeaderLink>
                <h2  onClick={handleClickHome}>
                    Home
                </h2>
                </HeaderLink>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagFornecedor}>
                    Página do Fornecedor
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagGestor}>
                    Página do Gestor
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagParceiros}>
                    Página de Parceiros
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagCidadao}>
                    Página do Cidadão
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagColaboradores}>
                    Página de Colaboradores
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickPagControlFiscal}>
                    Página de Controle e Fiscalização
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickLogin}>
                Login
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickSobre}>
                Sobre
                </h2>
            </MenuStyle>
            <MenuStyle>
                <h2  onClick={handleClickContato}>
                    Contato
                </h2>
            </MenuStyle>
        </Box>
    );
}

const Box = styled.div`
    background: #FFFFFF;
    width: 100%;
    margin-top: 40%;
`;
const MenuStyle = styled.div`
    background: #FFFFFF;
    border-bottom:1px solid #DDE0EA;
    width: 100%;
    height:100%;
    padding: 10%;
    text-align: center;
    color: #094CFF;
    font-style: italic;
    font-size:10px;
    text-transform: uppercase;
`;
export const HeaderLink = styled.a`
`;