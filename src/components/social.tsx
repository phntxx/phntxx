import React from "react";
import styled from "@emotion/styled";

import Icon from "./icon";

const SocialContainer = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
  padding: 0.5rem 0;
`;

const Social = () => (
  <SocialContainer>
    <Icon name="github" link="https://github.com/phntxx" />
    <Icon
      name="linkedin"
      link="https://www.linkedin.com/in/bastian-meissner/"
    />
    <Icon name="twitter" link="https://twitter.com/phntxx" />
  </SocialContainer>
);

export default Social;
