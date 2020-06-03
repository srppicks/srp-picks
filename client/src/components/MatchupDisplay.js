import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import FieldHolder from "./FieldHolder";
let fieldReceive = require('./WeekGolf.js');

let field = fieldReceive.field;

const Title = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const MatchupDisplay = () => {
  const [golfers, setGolfers] = React.useState([]);
  const [stat, setStat] = React.useState("Driving Accuracy");
  const [period, setPeriod] = React.useState("This Course");
  const [results, setResults] = React.useState([]);

  useEffect(() => {
      const fetchGolfers = () => {
        fetch("/api/golfers")
          .then(response => {
            if (!response.ok) {
            //alert("E");
            throw new Error(response.status_text);
          }
          //          alert("T");
            return response.json();
        })
          .then(data => {
            console.log(data);
            const forWeek = data.filter((golfer) => field.includes(golfer.name));
            setGolfers(forWeek);
          })
          .catch(err => console.log(err)); // eslint-disable-line no-console
      };
      const fetchResults = () => {
        fetch("/api/results")
          .then(response => {
            if (!response.ok) {
            //alert("E");
            throw new Error(response.status_text);
          }
          //          alert("T");
            return response.json();
        })
          .then(data => {
            setResults(data);
          })
          .catch(err => console.log(err)); // eslint-disable-line no-console
      };

      fetchResults();
      fetchGolfers();

    }, []);


  const dropBoxStat = (
    <select value={stat} onChange={(event) => setStat(event.target.value)}>
      <option key="SG OTT" value="SG OTT">Shots Gained Off-the-Tee</option>
      <option key="SG APP" value="SG APP">Shots Gained Approach</option>
      <option key="SG ARG" value="SG ARG">Shots Gained Around the Green</option>
      <option key="SG PUTT" value="SG PUTT">Shots Gained Putting</option>
      <option key="Driving Accuracy" value="Driving Accuracy">Driving Accuracy</option>
      <option key="Good Drive Percentage" value="Good Drive Percentage">Good Drive Percentage</option>
      <option key="Approaches +200 GIR" value="Approaches +200 GIR">Approaches +200 GIR</option>
      <option key="Approaches 175-200 GIR" value="Approaches 175-200 GIR">Approaches 175-200 GIR</option>
      <option key="Approaches 150-175 GIR" value="Approaches 150-175 GIR">Approaches 150-175 GIR</option>
      <option key="Approaches 125-150 GIR" value="Approaches 125-150 GIR">Approaches 125-150 GIR</option>
      <option key="Approaches 100-125 GIR" value="Approaches 100-125 GIR">Approaches 100-125 GIR</option>
      <option key="Approaches -100 GIR" value="Approaches -100 GIR">Approaches Under 100 GIR</option>
      <option key="Sand Save Percentage" value="Sand Save Percentage">Sand Save Percentage</option>
      <option key="Scrambling Capability" value="Scrambling Capability">Scrambling Capability</option>
      <option key="One Putt-Three Putt" value= "One Putt-Three Putt">One Putt-Three Putt Splits</option>
    </select>
  );

  const dropBoxTime = (
    <select value={period} onChange={(event) => setPeriod(event.target.value)}>
      <option key="This Course" value="This Course">This Course</option>
      <option key="This Season" value="This Season">This Season</option>
      <option key="All-Time" value="All-Time">All-Time</option>
    </select>
  );

  return (
    <div>
      <Title>Data on Golfers in the Field This Week</Title>
      <Container>
        <Row>
          <Col>
            <label>Select stat:</label>
          </Col>
          <Col>
            <label>Select time frame:</label>
          </Col>
        </Row>
        <Row>
          <Col>
            {dropBoxStat}
          </Col>
          <Col>
            {dropBoxTime}
          </Col>
        </Row>
      </Container>
      <FieldHolder golfers={golfers} stat={stat} period={period} courseId={field[0]} results={results}></FieldHolder>
    </div>
  );

};

export default MatchupDisplay;
