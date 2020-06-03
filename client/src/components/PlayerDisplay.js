import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const PlayerName = styled.h3`
  text-align: center;
`;
const PlayerMetrics = styled.div`
  text-align: center;
`;


function Average(arrayResults) {
  var totfairwayAttempt = 0.0;
  var totfairwayHit = 0.0;
  var totfwAtt = 0.0;
  var totfwProx = 0.0;
  var totgdAttempt = 0.0;
  var totgdHit = 0.0;
  var totgir75Attempt = 0.0;
  var totgir75Hit = 0.0;
  var totgir100Attempt = 0.0;
  var totgir100Hit = 0.0;
  var totgir125Attempt = 0.0;
  var totgir125Hit = 0.0;
  var totgir150Attempt = 0.0;
  var totgir150Hit = 0.0;
  var totgir175Attempt = 0.0;
  var totgir175Hit = 0.0;
  var totgir200Attempt = 0.0;
  var totgir200Hit = 0.0;
  var totonePutt = 0.0;
  var totputtAtt = 0.0;
  var totroAtt = 0.0;
  var totroProx = 0.0;
  var totrounds = 0.0;
  var totsandAtt = 0.0;
  var totsandSave = 0.0;
  var totscramblingAtt = 0.0;
  var totscramblingSave = 0.0;
  var totsgAPP = 0.0;
  var totsgArg = 0.0;
  var totsgOTT = 0.0;
  var totsgPutt = 0.0;
  var totthreePutt = 0.0;
  var tottotDrives = 0.0;

  arrayResults.forEach(object => {
    if (object.fairwayAttempt <= 70) {
      totfairwayAttempt += object.fairwayAttempt;
      totfairwayHit += object.fairwayHit;
    }

    if (object.fwAtt <= 70) {
      totfwAtt += object.fwAtt;
      totfwProx += object.fwProx;
    }

    if (object.gdAttempt <= 70) {
      totgdAttempt += object.gdAttempt;
      totgdHit += object.gdHit;
    }

    totgir75Attempt += object.gir75Attempt;
    totgir75Hit += object.gir75Hit;
    totgir100Attempt += object.gir100Attempt;
    totgir100Hit += object.gir100Hit;
    totgir125Attempt += object.gir125Attempt;
    totgir125Hit += object.gir125Hit;
    totgir150Attempt += object.gir150Attempt;
    totgir150Hit += object.gir150Hit;
    totgir175Attempt += object.gir175Attempt;
    totgir175Hit += object.gir175Hit;
    totgir200Attempt += object.gir200Attempt;
    totgir200Hit += object.gir200Hit;
    totonePutt += object.onePutt;
    if (totputtAtt <= 38) {
      totputtAtt += object.puttAtt;
    }


    if (object.roAtt <= 70) {
      totroAtt += object.roAtt;
      totroProx += object.roProx;
    }

    totrounds += object.rounds;

    if (object.sandAtt <= 25) {
      totsandAtt += object.sandAtt;
      totsandSave += object.sandSave;
    }

    if (object.scramblingAtt <= 25) {
      totscramblingAtt += object.scramblingAtt;
      totscramblingSave += object.scramblingSave;
    }

    totsgAPP += object.sgAPP;
    totsgArg += object.sgArg;
    totsgOTT += object.sgOTT;
    totsgPutt += object.sgPutt;
    totthreePutt += object.threePutt;
    tottotDrives += object.totDrives;
  });

  const result = {
    fairwayAttempt: totfairwayAttempt,
    fairwayHit: totfairwayHit,
    fwAtt: totfwAtt,
    fwProx: totfwProx,
    gdAttempt: totgdAttempt,
    gdHit: totgdHit,
    gir75Attempt: totgir75Attempt,
    gir75Hit: totgir75Hit,
    gir100Attempt: totgir100Attempt,
    gir100Hit: totgir100Hit,
    gir125Attempt: totgir125Attempt,
    gir125Hit: totgir125Hit,
    gir150Attempt: totgir150Attempt,
    gir150Hit: totgir150Hit,
    gir175Attempt: totgir175Attempt,
    gir175Hit: totgir175Hit,
    gir200Attempt: totgir200Attempt,
    gir200Hit: totgir200Hit,
    onePutt: totonePutt,
    puttAtt: totputtAtt,
    roAtt: totroAtt,
    roProx: totroProx,
    rounds: totrounds,
    sandAtt: totsandAtt,
    sandSave: totsandSave,
    scramblingAtt: totscramblingAtt,
    scramblingSave: totscramblingSave,
    sgAPP: totsgAPP,
    sgArg: totsgArg,
    sgOTT: totsgOTT,
    sgPutt: totsgPutt,
    threePutt: totthreePutt,
    totDrives: tottotDrives
  };

  return result;

};


const PlayerDisplay = ( { player, year, course }) => {
  const [results, setResults] = React.useState([]);
  console.log(player);
  console.log(player.id);
  console.log(year);
  console.log(course);
  useEffect(() => {
    const fetchData = () => {
      fetch(`/api/results/golferId/${player.id}`)
        .then(response => {
          if (!response.ok) {
          //alert("E");
          console.log(response);
          throw new Error(response.status_text);
        }
        //          alert("T");
        console.log("yep");
          return response.json();
      })
        .then(data => {
          console.log("reset");
          setResults(data);
        })
        .catch(err => console.log(err)); // eslint-disable-line no-console
      };
      console.log("wha??")
      fetchData();
    }, [player, year, course]);

  var stats2020 = null;
  if (course) {
    stats2020 = results.filter(object => object.courseId === course.id)
  }
  else {
    stats2020 = results;
  }

  if (year !== "All") {
    stats2020 = stats2020.filter(object => object.year === parseInt(year, 10));
  }

  console.log(stats2020);
  if (stats2020.length >= 1) {

    const values = Average(stats2020);
    console.log(values);

    return (
          <div>
            <Container fluid>
              <PlayerName>{player.name}</PlayerName>
              <PlayerMetrics>Height: {player.height} - Weight: {player.weight}</PlayerMetrics>
              <PlayerMetrics>Age: {player.birthday}</PlayerMetrics>
              <PlayerMetrics>Hometown: {player.hometown}</PlayerMetrics>
              <PlayerMetrics>---------------------------------------</PlayerMetrics>
              <PlayerMetrics>SG Stats</PlayerMetrics>
              <PlayerMetrics>Shots Gained Off-The-Tee: {(values.sgOTT/stats2020.length).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Shots Gained Approach: {(values.sgAPP/stats2020.length).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Shots Gained Around-the-Green: {(values.sgArg/stats2020.length).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Shots Gained Putting: {(values.sgPutt/stats2020.length).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>---------------------------------------</PlayerMetrics>
              <PlayerMetrics>Driving Stats</PlayerMetrics>
              <PlayerMetrics>Fairway Accuracy: {(values.fairwayHit/values.fairwayAttempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Good Drive Percentage: {(values.gdHit/values.gdAttempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>---------------------------------------</PlayerMetrics>
              <PlayerMetrics>Approach Stats</PlayerMetrics>
              <PlayerMetrics>200+ Approach GIR: {(values.gir200Hit/values.gir200Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>175-200 Approach GIR: {(values.gir175Hit/values.gir175Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>150-175 Approach GIR: {(values.gir150Hit/values.gir150Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>125-150 Approach GIR: {(values.gir125Hit/values.gir125Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>100-125 Approach GIR: {(values.gir100Hit/values.gir100Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Under 100 Approach GIR: {(values.gir75Hit/values.gir75Attempt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>---------------------------------------</PlayerMetrics>
              <PlayerMetrics>Scrambling Stats</PlayerMetrics>
              <PlayerMetrics>Sand Saves: {(values.sandSave/values.sandAtt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Scrambling Saves: {(values.scramblingSave/values.scramblingAtt).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>---------------------------------------</PlayerMetrics>
              <PlayerMetrics>Putting Stats</PlayerMetrics>
              <PlayerMetrics>One Putt Percentage: {(values.onePutt/(values.onePutt +values.threePutt)).toFixed(3)}</PlayerMetrics>
              <PlayerMetrics>Three Putt Percentage: {(values.threePutt/(values.onePutt +values.threePutt)).toFixed(3)}</PlayerMetrics>
            </Container>
          </div>

        );
    }

  return (
    <div>
      <Container fluid>
        <PlayerName>{player.name}</PlayerName>
        <PlayerMetrics>Height: {player.height} - Weight: {player.weight}</PlayerMetrics>
        <PlayerMetrics>Age: {player.age}</PlayerMetrics>
        <PlayerMetrics>Hometown: {player.hometown}</PlayerMetrics>

      </Container>
    </div>

  );

};

export default PlayerDisplay;
