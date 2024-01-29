import React from "react";
import styled from "styled-components";

const Card = ({ img, title, link }) => {
  return (
    <Container>
      <div class="card mg" style={{ width: "18rem", height: "350px" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">HTML, CSS, JAVASCRIPT, REACT JS</p>
          <a href={link} class="btn btn-primary">
            Go
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Card;

const Container = styled.div`
  .mg {
    margin-left: 40px;
    margin-top: 20px;
  }
  img {
    width: 286px;
    height: 180px;
  }
  p {
    font-size: 14px;
  }
`;
