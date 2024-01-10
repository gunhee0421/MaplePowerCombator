import styled from "styled-components";
import Serch from "../component/Serch";

const Mushroom=styled.img`
    position: absolute;
    height: 194px;
    left: 10%;
    top: 5%;
    border-radius: 125.5px;
`;
const Title=styled.div`
    position: absolute;
    left: 30%;
    top: 10%;
    color: #FFF500;
    font-size: 100px;
    font-family: "Jua";
    font-weight: bold;
    line-height: 80px;
    letter-spacing: 10px;
    word-wrap: break-word;
    text-align: center;
    text-shadow: -1px -1px 0 #A23030,  
    1px -1px 0 #A23030,
    -1px  1px 0 #A23030,
    1px  1px 0 #A23030;
`;
const Leap=styled.img`
    border-radius: 175%;
    position: absolute;
`
const Boss=styled.img`
    width: 20%;
    position: absolute;
`;
const Set=styled.a``;
const SetImg=styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 90%;
    top: 5%;
`

export default function Home() {
    return(
        <div>
            <Mushroom src="image/maplelogo.gif" alt="watiting"/>
            <Title>Maple Power <br></br> Converter</Title>
            <Leap src="image/leap1.png" style={{top: "65%", left: "15%", width: 200,height: 150}}></Leap>
            <Leap src="image/leap2.png" style={{top: "10%", left: "80%", width: 200,height: 150}}></Leap>
            <Leap src="image/leap3.png" style={{top: "70%", left: "75%", width: 200,height: 150}}></Leap>
            <Boss src="image/Boss.gif" style={{top: "50%", left: "40%"}}></Boss>
            <Set href="https://github.com/gunhee0421"><SetImg src="image/Build circle.png"/></Set>

            <Serch></Serch>
        </div>
    )
}