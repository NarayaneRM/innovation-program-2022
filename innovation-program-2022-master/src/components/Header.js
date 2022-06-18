
import React from "react";
import logo from "../imgs/logo_cinza.png";
import MenuHOME from "../imgs/icone_menu_0.png";
import styled, { withTheme } from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";

const HeaderHome=(props) => {

    const location = useLocation();
    const history = useNavigate();

    function handleClickMenu(){
        if(location.pathname == "/menu"){
            history(-1);
        }
        else{
            history("/menu")
        }
    }
    
        return (
            
            
            
            <Box>
                <Column>
                                <img src={logo} alt="Logo MEDLAND" />
                </Column>
                <Column>
                    <HeaderLink>
                        <i className="icone-history">
                            <MenuStyle>
                                <img  onClick={handleClickMenu} src={MenuHOME} alt="Menu" />
                            </MenuStyle>
                        </i>
                    </HeaderLink>
                </Column>
            </Box>
    );

    
    
};
export default HeaderHome;

const Column = styled.div`
    display: inline;
    align-items: left;
    justify-content: left;
    padding:0;
    img{
        height: 70%;
    }
    width: 100%;
    margin-top: 1%;
`;

const MenuStyle = styled.div`
    margin-top: 5px;
    img{
        width: 30px;
        height: 30px;
    }
    float:right;
`;



export const Box = styled.div`
    display: flex;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background: #DDE0EA;
    flex-direction: row;
    position: fixed;
    padding-left: 1%;
    padding-right: 5%;
    border-radius: 0px;
    
    
`;



export const HeaderLink = styled.a`
`;



