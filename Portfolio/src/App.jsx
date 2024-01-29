import { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Component/Sidebar/Sidebar";
import Navbar from "./Component/Nav/Navbar";
import Cards from "./Component/Card/Cards";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div className="nav_card">
          <Navbar></Navbar>
          <Cards></Cards>
          <Skills></Skills>

        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .nav_card {
    width: 100%;
  }
`;

export default App;
