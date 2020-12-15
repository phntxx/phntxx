import React from "react";
import styled from "@emotion/styled";

const Link = styled.a`
  text-decoration: none;
  color: black;

  padding: 1rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Imprint = () => <Link href="https://phntxx.tech/#imprint">imprint</Link>;

export default Imprint;
