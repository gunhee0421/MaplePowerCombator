import axios from "axios";
import { useEffect, useState } from "react"


const urlString="https://open.api.nexon.com/maplestory/v1/character/basic?ocid="
export default function Getuserinfo(apikey, ocid, time) {
    const [info, setInfo]=useState(null);
    const url=urlString+ocid+"&date="+time;

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(url, {
                    headers: {
                        "x-nxopen-api-key":apikey
                    }
                });
                setInfo(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, [apikey, ocid, time]);

    return info;
}