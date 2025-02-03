import axios from "axios";
import { useEffect, useState } from "react";

const urlString =
  "https://open.api.nexon.com/maplestory/v1/character/basic?ocid=";

interface InfoObject {
  character_image: string;
  character_name: string;
  character_class: string;
  character_level: string;
}

export default function Getuserinfo(
  apikey: string,
  ocid: string,
  time: string
) {
  const [info, setInfo] = useState<InfoObject>({
    character_image: "",
    character_name: "",
    character_class: "",
    character_level: "",
  });
  const url = urlString + ocid + "&date=" + time;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "x-nxopen-api-key": apikey,
          },
        });
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apikey, ocid, time, url]);

  return info;
}
