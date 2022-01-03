import "./Style.css";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
//   return <div>Hi There</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { lat: null, error: "" };
  // }
  state = { lat: null, error: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  }

  myconditional() {
    if (this.state.lat && !this.state.error) {
      return (
        <div>
          <SeasonDisplay lattitude={this.state.lat} />
        </div>
      );
    } else if (!this.state.lat && this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      return (
        <Spinner message="Please accept the location request to proceed further" />
      );
    }
  }
  render() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );

    return <div className="Border">{this.myconditional()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
