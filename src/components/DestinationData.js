import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading} </h2>
          <p>{this.props.text}4</p>
        </div>
        <div className="image">
          <img alt="Stone henge" src={this.props.img1} />
          <img alt="Stone heng2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
