import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import PlayerDisplay from "./PlayerDisplay";

const GolferDataPage = () => {
  const [golfers, setGolfers] = React.useState([]);
  const [current, setCurrent] = React.useState("Jordan Spieth");
  const [year, setYear] = React.useState("All");
  const [course, setCourse] = React.useState([]);
  const [currCourse, setCurrCourse] = React.useState("All");
  console.log(current);

  useEffect(() => {
    const fetchData = () => {
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
          setGolfers(data);
        })
        .catch(err => console.log(err)); // eslint-disable-line no-console
      };

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
            setCourse(data);
          })
          .catch(err => console.log(err)); // eslint-disable-line no-console
      };
      fetchData();
      fetchCourses();
    }, []);

  const htmlArray = [];
  let currGolfer = null;
  golfers.forEach((golfer) => {
    if (golfer.name === current) {
      currGolfer = golfer;
    }
    htmlArray.push((
      <option key={golfer.name} value={golfer.name}>{golfer.name}</option>
  ));
});

  const courseArray = [];
  courseArray.push((
    <option key="All" value="All">All</option>

  ));
  let nowCourse = null;
  course.forEach((check) => {
    if (check.name === currCourse) {
      nowCourse = check;
    }
    courseArray.push((
      <option key={check.pgaId} value={check.name}>{check.name}</option>
    ));


  });

  if (currGolfer) {
    console.log("Success");
    return (
      <div>
        <Row>
          <Container fluid="xl">
            <Row>
              <Col>
                <label>Select a player here:</label>
              </Col>
              <Col>
                <label>Select a year:</label>
              </Col>
              <Col>
                <label>Select a course (ALL is for every course):</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <select value={current} onChange={(event) => setCurrent(event.target.value)}>
                  {htmlArray}
                </select>
              </Col>
              <Col>
                <select value={year} onChange={(event) => setYear(event.target.value)}>
                  <option key="All" value="All">All</option>
                  <option key="Since Break" value="Since Break">Since Break</option>
                  <option key="2018" value="2018">2018</option>
                  <option key="2019" value="2019">2019</option>
                  <option key="2020" value="2020">2020</option>
                </select>
              </Col>
              <Col>
                <select value={currCourse} onChange={(event) => setCurrCourse(event.target.value)}>
                  {courseArray}
                </select>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Col>
            <PlayerDisplay player={currGolfer} year={year} course={nowCourse}></PlayerDisplay>
          </Col>
        </Row>
      </div>
    );
  }
  else {
    return (
      <div>
      </div>

    );
  }





};

export default GolferDataPage;
