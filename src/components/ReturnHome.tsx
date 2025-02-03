import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 20px 50px;
  &:hover {
    cursor: pointer;
  }
`;

export default function RetrunHome() {
  const navigator = useNavigate();
  return (
    <Home
      onClick={() => {
        navigator("/");
      }}
      src="image/Home.png"
    ></Home>
  );
}
