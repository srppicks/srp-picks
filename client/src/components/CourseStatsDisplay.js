import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import CourseHolder from "./CourseHolder"

const Title = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const CourseStatsDisplay = () => {
  const [stat, setStat] = React.useState("Driving Accuracy");
  const [courses, setCourses] = React.useState([]);
  const [results, setResults] = React.useState([]);

  useEffect(() => {
      const fetchCourses = () => {
        fetch("/api/courses")
          .then(response => {
            if (!response.ok) {
            //alert("E");
            throw new Error(response.status_text);
          }
          //          alert("T");
            return response.json();
        })
          .then(data => {
            setCourses(data);
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
      fetchCourses();
      fetchResults();

    }, []);

    const dropBox = (
      <select value={stat} onChange={(event) => setStat(event.target.value)}>
        <option key="Driving Accuracy" value="Driving Accuracy">Driving Accuracy</option>
        <option key="Good Drive Percentage" value="Good Drive Percentage">Good Drive Percentage</option>
        <option key="Approaches +200 Percentage" value="Approaches +200 Percentage">Approaches +200 Percentage</option>
        <option key="Approaches 175-200 Percentage" value="Approaches 175-200 Percentage">Approaches 175-200 Percentage</option>
        <option key="Approaches 150-175 Percentage" value="Approaches 150-175 Percentage">Approaches 150-175 Percentage</option>
        <option key="Approaches 125-150 Percentage" value="Approaches 125-150 Percentage">Approaches 125-150 Percentage</option>
        <option key="Approaches 100-125 Percentage" value="Approaches 100-125 Percentage">Approaches 100-125 Percentage</option>
        <option key="Approaches -100 Percentage" value="Approaches -100 Percentage">Approaches -100 Percentage</option>
        <option key="Sand Attempts per Round" value="Sand Attempts per Round">Sand Attempts per Round</option>
        <option key="Scrambling Capability" value="Scrambling Capability">Scrambling Opportunities</option>
        <option key="One Putt-Three Putt" value= "One Putt-Three Putt">One Putt-Three Putt</option>
      </select>
    );

    if (courses.length === 0 || results.length === 0) {
      return (
        <div>
          <Title>Data for Each Course</Title>
          <Container>
            <Row>
              <Col>
                {dropBox}
              </Col>
            </Row>
          </Container>
        </div>

      );
    }

    return (
      <div>
        <Title>Data for Each Course</Title>
        <Container>
          <Row>
            <Col>
              {dropBox}
            </Col>
          </Row>
          <CourseHolder results={results} courses={courses} stat={stat}></CourseHolder>
        </Container>
      </div>

    );


};

export default CourseStatsDisplay;
