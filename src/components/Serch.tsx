import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SerchDiv = styled.div`
  position: absolute;
  width: 30%;
  left: 30%;
  top: 35%;
`;
const ScerchImage = styled.img`
  margin-top: 10px;
  position: absolute;
  height: 50px;
  width: 50px;
`;
const NickNameInput = styled.input`
  margin-left: 70px;
  color: white;
  width: 100%;
  position: absolute;
  font-size: 28px;
  font-family: "Jua";
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 5px;
  word-wrap: break-word;
  border: 0px;
  padding: 10px;
  background: rgb(255, 128, 0, 0.3);
  border-radius: 50px;
`;

export default function Serch() {
  const navigator = useNavigate();
  const [nickname, setNickname] = useState("");

  const deletSpace = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\s/g, "");
    setNickname(newValue);
  };
  const goPower = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (nickname.length > 0) {
        navigator("/power", {
          state: {
            name: nickname,
          },
        });
      } else alert("닉네임을 입력해주세요.");
    }
  };
  const getNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    deletSpace(event);
  };

  return (
    <SerchDiv>
      <ScerchImage src="image/Search.png"></ScerchImage>
      <NickNameInput
        onKeyPress={goPower}
        onChange={getNickname}
        value={nickname}
        type="text"
        placeholder="유저의 닉네임을 입력해주세요."
      ></NickNameInput>
    </SerchDiv>
  );
}
