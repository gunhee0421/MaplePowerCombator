import axios from "axios";
import { useEffect, useState } from "react";

const urlString="https://open.api.nexon.com/maplestory/v1/character/stat?ocid=";

export default function Getpower(apikey, ocid, time) {
    const [power, setPower]=useState(null);
    const url=urlString+ocid+"&date="+time;

    useEffect(()=>{
        const fetchDate=async()=>{
            try{
                const response=await axios.get(url, {
                    headers: {
                        "x-nxopen-api-key":apikey
                    }
                });
                return response.data
            } catch(error){
                return null;
            }
        };
        fetchDate().then((data)=>{
            setPower(data);
        });
    },[apikey, ocid, time]);

    return power;
}