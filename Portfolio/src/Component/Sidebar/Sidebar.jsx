import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Container
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{
        width: "280px",
        height: "100%",
        borderRight: "1px solid  white",
      }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Socials</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a
            href="https://www.linkedin.com/in/ayush-jha-b535842ab/"
            class="nav-link  pd"
            aria-current="page"
            target="blank"
          >
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
            <FaLinkedinIn /> Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FrontEndAyush"
            class="nav-link text-white pd"
          >
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <FaGithub /> Github
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown"></div>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default Sidebar;
