import React, { useState, useEffect, ReactNode } from "react";
import styled from "@emotion/styled";

interface BodyProps {
  children: ReactNode;
}

const StyledBody = styled.body`
  background: #282828;
`;

function Body(props: BodyProps) {
  return <StyledBody>{props.children}</StyledBody>;
}

export default Body;
