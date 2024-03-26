import React from "react";
import styled, { css } from "styled-components";

const Root = styled.div`
  color: #fff;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Title = styled.h1`
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

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </Root>
);

export default Hero;
