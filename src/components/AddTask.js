import React from "react";
import { IoAdd } from "react-icons/io5";
import styled from "styled-components";
import { addTask } from "../actions/index";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

const InputTask = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid black;
  font-size: large;
  padding-left: 0.25rem;
  font-family: inherit;
  outline-style: none;
  ::focus {
    outline-style: none;
  }
`;

const Add = styled.button`
  background-color: #fff;
  border-radius: 50%;
  border: none;
  box-shadow: 2px 2px 2px grey;
  padding: 0.5rem;
  margin: 0.25rem;
`;

const AddTask = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <InputTask
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task ✍️"
      />
      <Add
        className="center add-btn"
        onClick={() => {
          if (input === "") {
            alert("fill required info!!!");
            return;
          }
          dispatch(addTask(input));
          setInput("");
        }}
      >
        <IoAdd cl size={25} />
      </Add>
    </Wrapper>
  );
};

export default AddTask;
