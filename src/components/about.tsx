import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: block;
  padding: 0.5rem 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  text-align: justify;
`;

const About = () => (
  <Container>
    <Paragraph>
      my name is bastian. on the internet i'm also known as phntxx.
    </Paragraph>
    <Paragraph>
      i'm a computer science student at the{" "}
      <Link href="https://www.oth-regensburg.de">
        university of applied sciences in regensburg
      </Link>
      .
    </Paragraph>
    <Paragraph>
      i like to code things with varying levels of purpose, ranging from{" "}
      <Link href="https://github.com/phntxx/dashboard">dashboards</Link> to{" "}
      <Link href="https://github.com/phntxx/shishabot">discord bots</Link>.
    </Paragraph>
    <Paragraph>
      i am also one of the system managers of{" "}
      <Link href="https://thettp.org">the ttp</Link> and handle the maintenance
      and administration of their forum, which is a vital part of their
      community.
    </Paragraph>
  </Container>
);

export default About;
