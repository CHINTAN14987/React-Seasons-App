import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Lets Go to Beach, Its so Hot",
    iconName: "sun",
  },
  Winter: { text: "Its Freezing Cold Here", iconName: "snowflake" },
};
const getSeason = (mylat, mymonth) => {
  if (mymonth > 2 && mymonth < 9) {
    return mylat > 0 ? "Winter" : "Summer";
  } else {
    return mylat < 0 ? "Summer" : "Winter";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lattitude, new Date().getMonth);
  console.log(props.lattitude);
  const { text, iconName } = seasonConfig[season];
  const icon = season === "Winter" ? " snowflake" : "sun";
  console.log(season);
  return (
    <div className={`seasondisplay ${season}`}>
      <i className={`icontop massive ${iconName} icon`} />
      <h1>
        {season === "Winter"
          ? "Its Freezing Cold Here"
          : "Lets Go to Beach, Its so Hot"}
      </h1>
      <i className={`iconbottom massive ${iconName} icon`} />
    </div>
  );
};

// <div>
// <i className={`${icon} icon`} />
// <h1>
//   {season === "Winter"
//     ? "Its Freezing Cold Here"
//     : "Lets Go to Beach, Its so Hot"}
// </h1>
// <i className={`${icon} icon`} />
// </div>

export default SeasonDisplay;
