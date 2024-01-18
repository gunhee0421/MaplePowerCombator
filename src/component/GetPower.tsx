import axios from "axios";
import { useEffect, useState } from "react";

const urlString="https://open.api.nexon.com/maplestory/v1/character/stat?ocid=";

interface PowerObject{
    final_stat: {
        42: {
            stat_value: string;
        };
    };
}

export default function Getpower(apikey: string, ocid: string, time: string) {
    const [power, setPower]=useState<PowerObject>({
        final_stat: {
            42: {
                stat_value: "",
            }
        }
    });
    const url=urlString+ocid+"&date="+time;

    useEffect(()=>{
        const fetchDate=async()=>{
            try{
                const response=await axios.get(url, {
                    headers: {
                        "x-nxopen-api-key":apikey
                    }
                });
                setPower(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchDate();
    },[apikey, ocid, time, url]);

    return power;
}