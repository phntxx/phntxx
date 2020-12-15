import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import Heading from "./components/heading";
import Social from "./components/social";
import About from "./components/about";
import Imprint from "./components/imprint";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 25%;

  border: 1px solid black;
  padding: 1rem;
`;

const App = () => (
  <>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;

          width: 100%;
          height: 100%;
        }

        body {
          font-family: Roboto, sans-serif;

          @media (max-width: 766px) {
            max-width: 90%;
          }
        }

        body,
        #root {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #root {
          width: fit-content;
        }
      `}
    />
    <Container>
      <Heading />
      <About />
      <Social />
      <Imprint />
    </Container>
  </>
);

export default App;
