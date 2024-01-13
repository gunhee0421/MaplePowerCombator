import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import RetrunHome from "../component/ReturnHome";
import Getocid from "../component/GetOcid";
import Getuserinfo from "../component/GetUserInfo";
import Getpower from "../component/GetPower";
import PowerShow from "../component/PowerShow";
import { useEffect, useState } from "react";
import axios from "axios";
import GetCombat from "../component/getCombat";

const UserImg=styled.img`
    position: absolute;
    height: 194px;
    left: 15%;
    top: 30%;
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
    line-height: 60px;
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
`;
const UserUI=styled.div`
    width: 30%;
    text-align: center;
`;

const API_KEY="test_3c21c9aae86447287477c3c16c0086e403aef7eb562f1bce33e8adc5056d3d102efe1676341768c46a0a1c770c79b82b";

let today=new Date();
let Time=today.getFullYear()+'-'+today.getMonth()+1+'-';
if(today.getDay()<10){
    Time=Time+"0"+today.getDay();
} else{
    Time=Time+today.getDay();
}

export default function Power() {
    const navigation=useNavigate();
    const location=useLocation();
    const [nickname, setNickname]=useState(location.state?.name || 'N/A');

    const ocid=Getocid(API_KEY, nickname);
    const info=Getuserinfo(API_KEY, ocid.ocid, Time);
    const power=Getpower(API_KEY, ocid.ocid, Time);

    const combatpower1=power ? power.final_stat[42].stat_value : "N/A";

    const combatpower=PowerShow(combatpower1);

    useEffect(()=>{
        if(ocid==="N/A"){
            alert("없는 캐릭터 입니다.")
        }
    })

    return (
        <div>
            <RetrunHome></RetrunHome>
            <UserUI>
                <UserImg src={info ? info.character_image : "image/maplelogo.gif"}></UserImg>
                <Usrname>{info ? info.character_name : "N/A"}</Usrname>
            </UserUI>
            <ShowText>직업: {info ? info.character_class : "N/A"}
                <br></br>레벨: {info ? info.character_level+"Lv" : "0Lv"}
                <br></br>전투력: {combatpower}
                <br></br>전투력 배율:  
                <br></br>표준 전투력: 
            </ShowText>
        </div>
    )
}