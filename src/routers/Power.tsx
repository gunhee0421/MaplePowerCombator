import { useLocation } from "react-router-dom"
import styled from "styled-components";
import RetrunHome from "../component/ReturnHome";
import Getocid from "../component/GetOcid";
import { useEffect, useState } from "react";
import Getuserinfo from "../component/GetUserInfo";

const UserImg=styled.img`
    position: absolute;
    height: 194px;
    left: 15%;
    top: 30%;
    border-radius: 125.5px;
`;
const ShowText=styled.div`
    position: absolute;
    height: 60%;
    left: 30%;
    top: 30%;
    color: red;
    font-size: 40px;
    font-family: 'Jua';
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 5px;
    word-wrap: break-word;
`;
const Usrname=styled.span`
    position: absolute;
    left: 15%;
    top: 55%;
    color: white;
    font-size: 40px;
    font-family: 'Jua';
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 5px;
    word-wrap: break-word;
`

const API_KEY="test_3c21c9aae86447287477c3c16c0086e403aef7eb562f1bce33e8adc5056d3d102efe1676341768c46a0a1c770c79b82b";

let today=new Date();
let Time=today.getFullYear()+'-'+today.getMonth()+1+'-';
if(today.getDay()<10){
    Time=Time+"0"+today.getDay();
} else{
    Time=Time+today.getDay();
}

export default function Power() {
    const location=useLocation();
    const nickname=location.state?.name || '';

    const ocid=Getocid(API_KEY, nickname);
    const info=Getuserinfo(API_KEY, ocid.ocid, Time);    

    return (
        <div>
            <RetrunHome></RetrunHome>
            <div style={{width: "30%"}}>
                <UserImg src={info ? info.character_image : "image/maplelogo.gif"}></UserImg>
                <Usrname>{nickname}</Usrname>
            </div>
            <ShowText>직업: {info ? info.character_class : "무직"}<br></br>레벨: {info ? info.character_level+"Lv" : "0Lv"}<br></br>전투력:</ShowText>
        </div>
    )
}