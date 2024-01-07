import { useLocation } from "react-router-dom"
import styled from "styled-components";
import RetrunHome from "../component/ReturnHome";


export default function Power() {
    const location=useLocation();
    const nickname=location.state?.name || '';

    return (
        <div>
            <RetrunHome></RetrunHome>
            <div style={{textAlign: "center"}}>nickname : {nickname}</div>
        </div>
    )
}