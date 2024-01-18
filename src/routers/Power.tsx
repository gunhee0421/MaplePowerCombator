import { useLocation } from "react-router-dom"
import styled from "styled-components";
import RetrunHome from "../component/ReturnHome";
import Getocid from "../component/GetOcid";
import Getuserinfo from "../component/GetUserInfo";
import Getpower from "../component/GetPower";
import PowerShow from "../component/PowerShow";
import GetMultiple from "../component/GetMultiple";
import { useEffect, useState } from "react";

const UserImg=styled.img`
    position: absolute;
    height: 194px;
    left: 15%;
    top: 30%;
`;
const ShowText=styled.div`
    position: absolute;
    height: 60%;
    left: 40%;
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
const TopText=styled.div`
    position: absolute;
    width: 25%;
    left: 5%;
    top: 85%;
    color: black;
    font-size: 20px;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
`

const API_KEY="test_3c21c9aae86447287477c3c16c0086e403aef7eb562f1bce33e8adc5056d3d102efe1676341768c46a0a1c770c79b82b";

interface OcidObject{
    ocid: string;
}
interface InfoObject{
    character_image: string;
    character_name: string;
    character_class: string;
    character_level: string;
}
interface PowerObject{
    final_stat: {
        42: {
            stat_value: string;
        };
    };
}

const today=new Date();
let Time=today.getFullYear()+'-'+today.getMonth()+1+'-';
const minToday=today.getDate()-1;
if(minToday<10){
    Time=Time+"0"+minToday;
} else{
    Time=Time+minToday;
}
export default function Power() {
    const location=useLocation();
    const nickname=location.state?.name || 'N/A';


    const ocidValue: OcidObject | null=Getocid(API_KEY, nickname);
    const ocid: string = ocidValue ? ocidValue.ocid : "N/A";

    const infoValue: InfoObject | null = Getuserinfo(API_KEY, ocid, Time);
    const info_image: string = infoValue.character_image;
    const info_name: string = infoValue.character_name;
    const info_class: string = infoValue.character_class;
    const info_level: string = infoValue.character_level;


    const powerValue: PowerObject | null = Getpower(API_KEY, ocid, Time);
    const power: string = powerValue ? powerValue.final_stat[42].stat_value : "N/A";
    const combatpower=PowerShow(power);

    const [warning, setWarning]=useState(false);
    const multiple = GetMultiple(info_class) || 0;

    const powermultyple=parseInt(String(power) || "0") * parseFloat(String(multiple));

    const localPower=PowerShow(String(powermultyple));

    useEffect(()=>{
        if(ocid==="X"){
            alert("없는 캐릭터 입니다.")
        }
        if(multiple===null){
            setWarning(true);
        }
    }, [ocid, multiple])

    return (
        <div>
            <RetrunHome></RetrunHome>
            <UserUI>
                <UserImg src={info_image ? info_image : "image/maplelogo.gif"}></UserImg>
                <Usrname>{info_name ? info_name : "N/A"}</Usrname>
            </UserUI>
            <TopText>전투력의 경우 하루 전의 서버에 저장된 캐릭터의 스탯임으로 정확한 측정을 위해서는 캐릭터의 셋팅을 변경해 주시기 바랍니다.</TopText>
            <ShowText>직업: {info_class ? info_class : "N/A"}
                <br></br>레벨: {info_level ? info_level+"LV" : "0LV"}
                <br></br>전투력: {power ? combatpower : "N/A"}
                <br></br>전투력 배율: {info_name ? multiple+"배" : "N/A"}
                <br></br>표준 전투력: {info_name ? localPower : "N/A"}
                {warning ? <h1 style={{fontSize: "50px", padding: "30px 50px 0px 0px"}}>제논과 데몬어벤져는 데이터가 부족해 나타나지 않습니다.</h1> : null}
            </ShowText>
        </div>
    )
}