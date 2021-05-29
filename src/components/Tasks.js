import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  flex-direction: column;
  padding: 0.5rem;

  margin: 1rem auto;

  width: 40vw;
`;

const Tasks = () => {
  const list = useSelector((state) => state.TaskListReducer.tasks);

  return (
    <Wrapper>
      {list.map((item, index) => {
        return <Task key={index} id={index} title={item} />;
      })}
    </Wrapper>
  );
};

export default Tasks;
