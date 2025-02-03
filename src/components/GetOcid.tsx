import axios from "axios";
import { useEffect, useState } from "react";

const urlString = "https://open.api.nexon.com/maplestory/v1/id?character_name=";

interface OcidObject {
  ocid: string;
}

export default function Getocid(apiKey: string, nickname: string) {
  const [ocid, setOcid] = useState<OcidObject>({ ocid: "" });
  const url = urlString + nickname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "x-nxopen-api-key": apiKey,
          },
        });
        setOcid(response.data);
      } catch (error) {
        console.log(error);
        setOcid({ ocid: "X" });
      }
    };
    fetchData();
  }, [apiKey, nickname, url]);

  return ocid;
}
