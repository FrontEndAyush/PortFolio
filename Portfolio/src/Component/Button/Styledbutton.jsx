import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  color: white;
  background-color: #212529;
  border: 1px solid red;

  border-radius: 5px;

  margin-left: 20px;

  @media screen and (max-width: 480px){
    margin-top: 20px;
  }
`;
