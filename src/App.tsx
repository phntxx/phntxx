import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import Heading from "./components/heading";
import About from "./components/about";
import Contact from "./components/contact";

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 766px) {
    max-width: 30%;
  }
`;

const App = () => (
  <>
    <Global
      styles={css`
        body {
          font-family: "Work Sans", sans-serif;
        }

        #root {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        html,
        body,
        #root {
          height: 100%;
          width: 100%;
          margin: 0;
        }
      `}
    />
    <Container>
      <Heading />
      <About />
      <Contact />
    </Container>
  </>
);

export default App;
