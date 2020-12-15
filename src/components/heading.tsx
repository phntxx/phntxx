import React from "react";
import styled from "@emotion/styled";
import Emoji from "./emoji";

const Headline = styled.h1`
  margin: 0;
  padding: 1rem 0.25rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Heading = () => (
  <Container>
    <Headline>
      <Emoji symbol="👋🏻" />
    </Headline>
    <Headline>hi! i'm bastian!</Headline>
  </Container>
);

export default Heading;
