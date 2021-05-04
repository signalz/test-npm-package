import React from "react";
import styled from "styled-components";
import { primary } from "../Colors";
const Container = styled.div`
  background-color: ${primary};
`;

const Heading = ({
  children
}) => /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h1", null, children));

export default Heading;