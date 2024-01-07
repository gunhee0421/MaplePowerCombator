import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routers/Home"
import Power from "./routers/Power"
import styled from "styled-components";


const router=createBrowserRouter([
  {
    path:"/",
    element:(
      <Home></Home>
    )
  },
  {
    path:"/power",
    element:(
      <Power></Power>
    )
  }
]);
const Wrapper=styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: rgb(255, 128, 0, 0.30);
`;

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router}/>
    </Wrapper>
  )
}

export default App
