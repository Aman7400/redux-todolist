import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask } from "../actions/index";
import { AiFillDelete } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  align-items: baseline;

  margin: 0.25rem auto;
  padding: 0.25rem 0.5rem;

  :hover {
    background-color: #00ffaa;
    box-shadow: 2px 2px 2px gray;

    h1 {
      color: #fff;
    }
  }
`;

const Title = styled.h1`
  font-weight: lighter;
  color: grey;

  text-transform: capitalize;
`;

const Task = ({ id, title }) => {
  const dispatch = useDispatch();
  const [click, setClick] = React.useState(false);

  return (
    <Wrapper
      onClick={() => {
        setClick(!click);
      }}
      className={click ? "clicked" : ""}
    >
      <Title>
        {title}
       
      </Title>
      {click ? (
        <span className="center  dlt-btn " style={{ marginLeft: "auto" }}>
          <AiFillDelete
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          />
        </span>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Task;
