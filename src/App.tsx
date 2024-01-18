import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import Power from "./routers/Power"
import styled from "styled-components";

const Wrapper=styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: rgb(255, 128, 0, 0.30);
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/power" element={<Power />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
