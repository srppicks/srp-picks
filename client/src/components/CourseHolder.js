import React from "react";
import { Row, Col } from "reactstrap";

function Insert(arraySort, addition) {
  console.log("In: " + addition.name);
  console.log(arraySort.slice());
  console.log(addition);
  if (arraySort.length === 0) {
    arraySort.push(addition);
    console.log(arraySort.slice());
    return arraySort;
  }
  else {
    const max = arraySort.length;
    let index = 0
    while (index < max) {
      if (arraySort[index].stat >= addition.stat) {
        index += 1;
      }
      else {
        arraySort.splice(index, 0, addition);
        console.log(arraySort.slice());
        return arraySort;
      }
    }

    if (addition.stat === 0) {
      return arraySort;
    }
    else {
      arraySort.push(addition)
      console.log(arraySort.slice());
      return arraySort;
    }
  }


}

function Average(course, results, stat) {
    console.log("Enter");
    const arrayResults = results.filter((result) => result.courseId === course.id);

    if (stat === "Driving Accuracy") {
      let totfairwayAttempt = 0.0;
      let totfairwayHit = 0.0;
      arrayResults.forEach((object) => {
      if (object.fairwayAttempt <= 70) {
        totfairwayAttempt += object.fairwayAttempt;
        totfairwayHit += object.fairwayHit;
      }});
      if (totfairwayAttempt > 0) {
        return (
          {
            name: course.name,
            stat: totfairwayHit/totfairwayAttempt
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );  }
    else if (stat === "Good Drive Percentage") {
      let totgdAttempt = 0.0;
      let totgdHit = 0.0;
      arrayResults.forEach((object) => {
      if (object.gdAttempt <= 70) {
        totgdAttempt += object.gdAttempt;
        totgdHit += object.gdHit;
      }});
      if (totgdAttempt > 0) {
        return (
          {
            name: course.name,
            stat: totgdHit/totgdAttempt
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches +200 Percentage") {
      console.log("WOOOOOO");
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir200Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir200Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches 175-200 Percentage") {
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir175Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir175Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches 150-175 Percentage") {
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir150Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir150Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches 125-150 Percentage") {
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir125Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir125Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches 100-125 Percentage") {
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir100Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir100Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches -100 Percentage") {
      let totgir200Attempt = 0.0;
      let totgir175Attempt = 0.0;
      let totgir150Attempt = 0.0;
      let totgir125Attempt = 0.0;
      let totgir100Attempt = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir175Attempt += object.gir175Attempt;
        totgir150Attempt += object.gir150Attempt;
        totgir125Attempt += object.gir125Attempt;
        totgir100Attempt += object.gir100Attempt;
        totgir75Attempt += object.gir75Attempt;
      });
      if (totgir75Attempt > 0) {
        return (
          {
            name: course.name,
            stat: totgir75Attempt/(totgir200Attempt+totgir175Attempt+totgir150Attempt+totgir125Attempt+totgir100Attempt+totgir75Attempt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Sand Attempts per Round") {
      let totsandAtt = 0.0;
      //let totsandSave = 0.0;
      arrayResults.forEach((object) => {
        if (object.sandAtt <= 25) {
          totsandAtt += object.sandAtt;
          //totsandSave += object.sandSave;
        }
      });
      if (totsandAtt > 0) {
        return (
          {
            name: course.name,
            stat: totsandAtt/arrayResults.length
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "Scrambling Capability") {
      let totscramblingAtt = 0.0;
      let totscramblingSave = 0.0;
      arrayResults.forEach((object) => {
        if (object.scramblingAtt <= 25) {
          totscramblingAtt += object.scramblingAtt;
          totscramblingSave += object.scramblingSave;
        }
      });
      if (totscramblingAtt > 0) {
        return (
          {
            name: course.name,
            stat: totscramblingSave/totscramblingAtt
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }
    else if (stat === "One Putt-Three Putt") {
      let totonePutt = 0.0;
      let totthreePutt = 0.0;
      arrayResults.forEach((object) => {
        totonePutt += object.onePutt;
        totthreePutt += object.threePutt;
      });

      if (totonePutt+totthreePutt > 0) {
        return (
          {
            name: course.name,
            stat: totonePutt/(totonePutt+totthreePutt)
          }
        );
      }
      return (
        {
          name: course.name,
          stat: 0
        }
      );
    }

    return arrayResults;



}


const CourseHolder = ( { results, courses, stat } ) => {
  console.log(results);
  console.log(courses);
  console.log(stat);
  let htmlArray = [];
  let i;
  let layout = [];
  console.log(layout.slice());

  for (i = 0; i < courses.length; i++) {
    const value = Average(courses[i], results, stat);
    layout = Insert(layout, value);
  }


  layout.forEach((item, index) => {
    htmlArray.push((
      <Row>
        <Col>
          <label>{index + 1}</label>
        </Col>
        <Col>
          <label>{item.name}</label>
        </Col>
        <Col>
          <label>{item.stat.toFixed(3)}</label>
        </Col>
      </Row>
    ));

  });

  console.log(stat);
  return (
    <div>
      {htmlArray}
    </div>

  );


};

export default CourseHolder;
