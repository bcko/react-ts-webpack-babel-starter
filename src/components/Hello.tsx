import * as React from "react";
import styled from 'styled-components'

export interface HelloProps {
  compiler: string;
  framework: string;
}
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Hello = (props: HelloProps) => (
  <Title>
    Hello from {props.compiler} and {props.framework}!
  </Title>
);