import MainIcon from "./mainIcon.png";
import styled from "styled-components";
import "./App.css";
import "./main.css";

function App() {
  return (
    <Wrapper>
      <Row>
        <Column>
          <Cursive>Coming Soon!</Cursive>
          <BlockText fontSize="30px">Site Under Construction</BlockText>
        </Column>
        <Column>
          <img src={MainIcon} className="App-logo" alt="logo" />
        </Column>
        <Column>
          <Cursive>UX</Cursive>
          <BlockText fontSize="65px">DESIGNER</BlockText>
        </Column>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
`;

const Cursive = styled.p`
  font-family: "Caveat", cursive;
  font-size: 60px;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;

const BlockText = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 900;
  font-size: ${({ fontSize }) => fontSize && fontSize};
  margin: 0;
  padding: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin: 0;
`;

export default App;
