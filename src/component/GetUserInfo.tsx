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
                return response.data;
            } catch(error){
                return null;
            }
        };
        fetchData().then((data)=>{
            setInfo(data);
        });
    }, [apikey, ocid, time]);

    return info;
}