import React from "react";
import styled from "@emotion/styled";

const Link = styled.a`
  text-decoration: none;
  color: black;

  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => (
  <Container>
    <Link href="mailto://phntxx@gmail.com">contact</Link>
  </Container>
);

export default Contact;
