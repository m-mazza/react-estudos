import React from "react";
import styled from "styled-components";
import "./fonts.css";

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    &::before {
      content: "\\2713\\0020";
    }
  }
`;

const Hero = ({ title, children }) => (
  <div>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </div>
);

export default Hero;
