import React from "react";
import styled from "styled-components";

import { primary } from "../Colors";

const Container = styled.div`
  background-color: ${primary};
`;

const Heading = ({ children }) => (
  <Container>
    <h1>{children}</h1>
  </Container>
);

export default Heading;
