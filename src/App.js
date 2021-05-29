import styled from "styled-components";
import "./App.css";
import AddTask from "./components/AddTask";
import Heading from "./components/Heading";
import Tasks from "./components/Tasks";

// const store = createStore();

const TopWrapper = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <div className="App ">
      <TopWrapper className="center">
        <Heading />
        <AddTask />
      </TopWrapper>
      <Tasks />
    </div>
  );
}

export default App;
