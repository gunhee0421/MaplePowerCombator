import axios from "axios";
import { useEffect, useState } from "react";


const urlString="https://open.api.nexon.com/maplestory/v1/id?character_name=";

export default function Getocid(apiKey, nickname) {
    const [ocid, setOcid]=useState("");
    const url=urlString+nickname;

    useEffect(()=>{
        const fetchData =async () => {
            try{
                const response = await axios.get(url, {
                    headers: {
                        "x-nxopen-api-key":apiKey
                    }
                });
                return response.data;
            } catch(error){
                return null;
            }
        };
        fetchData().then((data)=>{
            setOcid(data);
        });
    },[apiKey]);

    return ocid;
}