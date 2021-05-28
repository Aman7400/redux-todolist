import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  box-shadow: 2px 2px 5px grey;
  font-size: 2rem;
`;

const Heading = () => {
  return <Title>To Do List</Title>;
};

export default Heading;
