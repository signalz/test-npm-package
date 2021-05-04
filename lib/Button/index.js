import React from "react";
import styled from "styled-components";
import { primary } from "../Colors";
const Container = styled.div`
  background-color: ${primary};
  font-family: "Lacquer";
`;
const Heading1 = styled.h1`
  font-family: "Lacquer";
`;

const Heading = ({
  children
}) => /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Heading1, null, children));

export default Heading;