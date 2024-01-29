import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div className="logo">
        <img src="/Images/ppp.png" alt="logo" />
        <h1>FrontEnd-Ayush</h1>
      </div>
      <div>
        <a
          type="button"
          class="btn btn-success btn"
          href="/Images/profilePic.webp"
          download={"image"}
        >
          Resume
        </a>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: #212529;
  height: 160px;
  align-items: center;
  border-left: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 480px) {
    width: 100%;
    border-left: none;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }

  @media screen and (max-width: 480px) {
    .logo {
      flex-direction: column;
    }
    padding: 10px;
  }
  img {
    border-radius: 50%;
    border: 5px solid white;
   width: 130px;

  }
  h1 {
    margin-left: 20px;
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .btn {
    margin-right: 40px;
  }
  @media screen and (max-width: 480px) {
    .btn {
      margin-right: 19px;
    }
  }
`;
