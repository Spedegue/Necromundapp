"use client";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface LoaderProps {}

const scroll = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

// const yellow = "#eab464";
const yellow = "#d59621";
const black = "#2d343f";

const StyledLoader = styled.div`
  height: 50px;
  width: 200px;
  border: 1px solid white;
  background: repeating-linear-gradient(
    -45deg,
    ${yellow},
    ${yellow} 20px,
    ${black} 20px,
    ${black} 40px
  );
  background-size: 200% 100%;
  animation: ${scroll} 5s linear infinite;
`;

function Loader(props: LoaderProps) {
  return <StyledLoader></StyledLoader>;
}

export default Loader;
