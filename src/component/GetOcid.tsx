import axios from "axios";
import { useEffect, useState } from "react";


const urlString="https://open.api.nexon.com/maplestory/v1/id?character_name=";

export default function Getocid(apiKey,nickname) {
    const [ocid, setOcid]=useState(null);
    const url=urlString+nickname;

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get(url, {
                    headers: {
                        "x-nxopen-api-key":apiKey
                    }
                });
                setOcid(response.data);
            } catch(error){
                console.log(error);
                setOcid("X");
            }
        };
        fetchData();
    },[apiKey, nickname, url]);

    return ocid;
}