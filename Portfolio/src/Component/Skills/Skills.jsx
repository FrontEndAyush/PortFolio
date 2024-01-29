import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Styledbutton";

const Skills = () => {
  return (
    <>
      <Heading>WHAT I KNOW ?</Heading>
      <Container>
        <Button>HTML</Button>
        <Button>CSS</Button>
        <Button>BOOTSTRAP</Button>
        <Button>JAVASCRIPT</Button>
        <Button>REACT JS</Button>
        <Button>FIGMA TO HTML</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b23;
  width: 1250px;
  display: flex;
  justify-content: center;
  margin-top: 44px;
  padding: 10px;



  @media screen and (max-width: 480px){
    flex-direction: column;
    width: 200px;
    margin: auto;
    width: 100%;
  }

`;

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin-top: 25px;
  font-size: 22px;
`;
export default Skills;
