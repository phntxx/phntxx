import styled from "@emotion/styled";

import { Link } from "./link";

import { socialInfo } from "../constants";

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
  padding: 0.5rem 0;
`;

const Contact = () => (
  <SocialContainer>
    { socialInfo.map(({ name, url }, idx) => (
      <Link key={[name, idx].join("")} href={url}>
        { name}
      </Link>
    ))}
  </SocialContainer >
);

export default Contact;
