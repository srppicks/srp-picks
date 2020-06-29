import React from "react";
import { Row, Col } from "reactstrap";

function Insert(arraySort, addition) {
  if (arraySort.length === 0) {
    arraySort.push(addition);
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
        return arraySort;
      }
    }

    if (addition.stat === 0) {
      arraySort.push(addition)
      return arraySort;
    }
    else {
      arraySort.push(addition)
      return arraySort;
    }
  }


}

function Average(golfer, results, stat) {

    const arrayResults = results.filter((result) => result.golferId === golfer.id);

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
            name: golfer.name,
            stat: totfairwayHit/totfairwayAttempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );
    }
    if (stat === "SG OTT") {
      let totsgOTT = 0.0;
      arrayResults.forEach((object) => {
        totsgOTT += object.sgOTT;
      });
      if (arrayResults.length !== 0) {
        return (
          {
            name: golfer.name,
            stat: totsgOTT/arrayResults.length
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "SG APP") {
      let totsgAPP = 0.0;
      arrayResults.forEach((object) => {
        totsgAPP += object.sgAPP;
      });
      if (arrayResults.length !== 0) {
        return (
          {
            name: golfer.name,
            stat: totsgAPP/arrayResults.length
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "SG ARG") {
      let totsgArg = 0.0;
      arrayResults.forEach((object) => {
        totsgArg += object.sgArg;
      });
      if (arrayResults.length !== 0) {
        return (
          {
            name: golfer.name,
            stat: totsgArg/arrayResults.length
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );
    }
    else if (stat === "SG PUTT") {
      let totsgPutt = 0.0;
      arrayResults.forEach((object) => {
        totsgPutt += object.sgPutt;
      });
      if (arrayResults.length !== 0) {
        return (
          {
            name: golfer.name,
            stat: totsgPutt/arrayResults.length
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }

    else if (stat === "Driving Accuracy") {
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
            name: golfer.name,
            stat: totfairwayHit/totfairwayAttempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
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
            name: golfer.name,
            stat: totgdHit/totgdAttempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Approaches +200 GIR") {
      console.log("In");
      console.log(arrayResults.length);
      let totgir200Hit = 0.0;
      let totgir200Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir200Attempt += object.gir200Attempt;
        totgir200Hit+= object.gir200Hit;
      });
      if (totgir200Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir200Hit/totgir200Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );
    }
    else if (stat === "Approaches 175-200 GIR") {
      let totgir175Hit = 0.0;
      let totgir175Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir175Attempt += object.gir175Attempt;
        totgir175Hit += object.gir175Hit;
      });
      if (totgir175Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir175Hit/totgir175Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Approaches 150-175 GIR") {
      let totgir150Hit = 0.0;
      let totgir150Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir150Attempt += object.gir150Attempt;
        totgir150Hit += object.gir150Hit;
      });
      if (totgir150Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir150Hit/totgir150Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Approaches 125-150 GIR") {
      let totgir125Hit = 0.0;
      let totgir125Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir125Attempt += object.gir125Attempt;
        totgir125Hit += object.gir125Hit;
      });
      if (totgir125Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir125Hit/totgir125Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Approaches 100-125 GIR") {
      let totgir100Hit = 0.0;
      let totgir100Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir100Attempt += object.gir100Attempt;
        totgir100Hit += object.gir100Hit;
      });
      if (totgir100Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir100Hit/totgir100Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Approaches -100 GIR") {
      let totgir75Hit = 0.0;
      let totgir75Attempt = 0.0;
      arrayResults.forEach((object) => {
        totgir75Attempt += object.gir75Attempt;
        totgir75Hit += object.gir75Hit;
      });
      if (totgir75Attempt > 0) {
        return (
          {
            name: golfer.name,
            stat: totgir75Hit/totgir75Attempt
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );

    }
    else if (stat === "Sand Save Percentage") {
      let totsandAtt = 0.0;
      let totsandSave = 0.0;
      arrayResults.forEach((object) => {
        if (object.sandAtt <= 25) {
          totsandAtt += object.sandAtt;
          totsandSave += object.sandSave;
        }
      });
      if (totsandAtt > 0) {
        return (
          {
            name: golfer.name,
            stat: totsandSave/totsandAtt
          }
        );
      }
      return (
        {
          name: golfer.name,
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
            name: golfer.name,
            stat: totscramblingSave/totscramblingAtt
          }
        );
      }
      return (
        {
          name: golfer.name,
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
            name: golfer.name,
            stat: totonePutt/(totonePutt+totthreePutt)
          }
        );
      }
      return (
        {
          name: golfer.name,
          stat: 0
        }
      );
    }

    return arrayResults;



}

const FieldHolder = ( { golfers, stat, period, courseId, results } ) => {
  console.log(stat);
  let filteredResults;
  if (period === "This Course") {
    filteredResults = results.filter((result) => result.courseId === parseInt(courseId, 10));
  }
  else if (period === "This Season") {
    filteredResults = results.filter((result) => result.year === 2020);
  }
  else if (period === "Since Break") {
    filteredResults = results.filter((result) => result.year === 2020 && (result.courseId === 30 || result.courseId === 24 || result.courseId === 34));
  }
  else {
    filteredResults = results;
  }
  let htmlArray = [];
  let i;
  let layout = [];

  for (i = 0; i < golfers.length; i++) {
    console.log(golfers[i]);
    const value = Average(golfers[i], filteredResults, stat);
    console.log(value);
    layout = Insert(layout, value);
  }

  console.log(layout.slice());
  layout.forEach((item, index) => {
    if (item.stat !== 0) {
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
    }
    else {
      htmlArray.push((
        <Row>
          <Col>
            <label>{index + 1}</label>
          </Col>
          <Col>
            <label>{item.name}</label>
          </Col>
          <Col>
            <label>No Stats</label>
          </Col>
        </Row>
      ));
    }


  });




  return (
    <div>
      {htmlArray}
    </div>
  );


};

export default FieldHolder;
