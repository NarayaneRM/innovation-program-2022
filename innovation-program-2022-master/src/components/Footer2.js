import React from "react";
import easter_egg from "../imgs/easter_egg.png";
import styled from 'styled-components';


const Footer2 = () => {

    return (
        <Box>
            <Column>
                        <img src={easter_egg} alt="Logo MEDLAND" />
            </Column>
        </Box>
    );
};
export default Footer2;


export const Box = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 1%;
    padding-right: 1%;
    height: 45px;
    border-radius: 0px;
    background: #0033BA;
    color:white;
    font-family: philosopher;
`;

export const Column = styled.div`
display: inline-block;
width: 100%;
img{
    height: 90%;
}
margin-top: 0;
`;

