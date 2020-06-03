import React from "react";
import "./App.css";

import styled from "styled-components";
import { Container, Button, Row, Col } from "reactstrap";
import PGAPage from "./components/PGAPage"

const Title = styled.h1`
  text-align: center;
  padding: 1rem;
  background-color: #a0000f;
  color: white;
`;

const Message = styled.div`
  padding: 70px 0;
  text-align: center;
  /*background-image: url('Jefferson.png')*/
`;

const MessageP = styled.p`
  padding: 70px 0;
  text-align: center;
  /*background-image: url('Jefferson.png')*/
`;

const App = () => {
  const [view, setView] = React.useState("Home");

  const offerredSports = ["Home", "MLB", "NFL", "PGA"];
  const htmlArray = offerredSports.map(sport => (
    <Col key={sport} xs="3">
      <Button
        style={{ backgroundColor: "#0000ff", display: "flex", justifyContent: "center"}}
        onClick={() => {
          setView(sport)
        }}
      >{sport}</Button>
    </Col>
  ));


  if (view === "Home") {
    return (
      <div>
        <Title>SRP Picks</Title>
        <Container fluid="xl">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <Message>Welcome to the big time. Providing sport projections, research, data, and picks since 2018.</Message>
        <MessageP>Follow us on Twitter here! <a href="https://twitter.com/SrpPicks">SRP Picks Twitter</a><br /></MessageP>
      </div>
    );


  }
  else if (view==="MLB") {
    return (
      <div>
        <Title>SRP Picks</Title>
        <Container fluid="xl">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <Row>
          <Col>
            <Message>MLB Section Coming Soon</Message>
          </Col>
        </Row>
        <MessageP>Follow us on Twitter here! <a href="https://twitter.com/SrpPicks">SRP Picks Twitter</a><br /></MessageP>
      </div>
    );

  }
  else if (view==="NFL") {
    return (
      <div>
        <Title>SRP Picks</Title>
        <Container fluid="xl">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <Row>
          <Col>
            <Message>NFL Section Coming Soon</Message>
          </Col>
        </Row>
        <MessageP>Follow us on Twitter here! <a href="https://twitter.com/SrpPicks">SRP Picks Twitter</a><br /></MessageP>
      </div>
    );

  }
  else if (view==="PGA") {
    return (
      <div>
        <Title>SRP Picks</Title>
        <Container fluid="xl">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <PGAPage></PGAPage>
        <MessageP>Follow us on Twitter here! <a href="https://twitter.com/SrpPicks">SRP Picks Twitter</a><br /></MessageP>
      </div>
    );

  }
  else {
    return (
      <div>None</div>
    );
  }




};

export default App;
