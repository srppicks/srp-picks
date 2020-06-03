import React from "react";
import styled from "styled-components";
import { Row, Col, Button, Container } from "reactstrap";
import GolferDataPage from "./GolferDataPage"
import MatchupDisplay from "./MatchupDisplay";
import CourseStatsDisplay from "./CourseStatsDisplay";

const Title = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const Message = styled.div`
  padding: 70px 0;
  text-align: center;
  /*background-image: url('Jefferson.png')*/
`;

const PGAPage = () => {
  const [mode, setMode] = React.useState("main");
  const linksList = ["Player by Player Data", "Field Stat Analysis", "Course Data", "Picks"]

  const htmlArray = linksList.map(situation => (
    <Col key={situation} xs="3">
      <Button
        style={{ backgroundColor: "#0000ff", display: "flex", justifyContent: "center"}}
        onClick={() => {
          setMode(situation);
        }}
      >{situation}</Button>
    </Col>
  ));

  if (mode === "main") {
    return (
      <div>
        <Title>PGA</Title>
        <Container fluid="sm">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <Message>Select one of the denoted sections above to begin researching present PGA golfers and courses!</Message>
      </div>

    );

  }
  else if (mode === "Player by Player Data") {
    return (
      <div>
        <Title>PGA</Title>
        <Container fluid>
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <GolferDataPage></GolferDataPage>
      </div>

    );

  }
  else if (mode === "Field Stat Analysis") {
    return (
      <div>
        <Title>PGA</Title>
        <Container fluid="sm">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <MatchupDisplay></MatchupDisplay>
      </div>

    );

  }
  else if (mode === "Course Data") {
    return (
      <div>
        <Title>PGA</Title>
        <Container fluid="sm">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <CourseStatsDisplay></CourseStatsDisplay>
      </div>

    );

  }
  else if (mode === "Picks") {
    return (
      <div>
        <Title>PGA</Title>
        <Container fluid="sm">
          <Row>
            {htmlArray}
          </Row>
        </Container>
        <Message>Select one of the denoted sections above to begin researching present PGA golfers and courses!</Message>
        <div>{mode}</div>
      </div>

    );

  }




};

export default PGAPage;
