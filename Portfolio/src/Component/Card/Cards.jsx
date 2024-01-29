import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Cards = () => {
  return (
    <>
      <Heading>PROJECTS</Heading>
      <Container>
        <Card img="/Project/first.PNG" title="Form" />
        <Card img="/Project/sec.PNG" title="Dice Game" />
        <Card
          img="/Project/third.PNG"
          title="Foody Zone"
          link="https://github.com/FrontEndAyush/Making-Projects-In-React/tree/main/Foody-Zone"
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
const Heading = styled.h1`
  color: white;
  text-align: center;
  margin-top: 15px;
  font-size: 29px;
`;

export default Cards;
