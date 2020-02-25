import styled from "styled-components"
import imgArow from '../assets/arrow-right.png'

export const NavButton = styled.button`
font-size: 1em;
min-width:140px;
padding: 0.2em 1em;
border: none;
background:inherit;
font-weight:bolder;
font-size:22px;
color:#fff;
border-radius: 20px;
    &:hover{
    background:blue;
    box-shadow:0px 2px 3px #bec0c4;
    transition:0.5s;
    }
`

export const goUpLogo=styled.span`
background-image:url(${imgArow});
font-size: 1em;
min-width:150px;
padding: 0.2em 1em;
border: none;
border-radius:20px;
background:#fff;
font-size:22px;
line-height:1.5em;
color:blue;
`


export const DaftarBtn= styled.button`
font-size: 1em;
min-width:150px;
padding: 0.2em 1em;
border: none;
border-radius:20px;
background:#fff;
font-size:22px;
line-height:1.5em;
color:blue;
`
export const BtnNextPrev =styled.button`
width:80px;
border:none;
height:80px;
background:rgba(0,0,0,0.3);
border-radius:100%;
`

export const BtnKelas=styled.button`
font-size: 1em;
min-width:140px;
padding: 0.2em 1em;
border: none;
background:inherit;
font-weight:bolder;
font-size:22px;
border-radius:5px;
color:#fff;
    &:hover{
        background:rgba(0,0,0,0.3);
    }
`

