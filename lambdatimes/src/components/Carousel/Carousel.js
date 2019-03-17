import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  state = {
    carouselData: [],
    currentImage: "",
    currentImageIndex: 0
  };

  componentDidMount = () => {
    this.setState({ carouselData, currentImage: carouselData[0] });
  };

  leftClick = () => {
    if (this.state.currentImageIndex === 0) {
      this.setState({ currentImageIndex: 3 });
    } else {
      this.setState({ currentImageIndex: this.state.currentImageIndex - 1 });
    }
  };

  rightClick = () => {
    if (this.state.currentImageIndex === 3) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
    }
  };

  selectedImage = () => {
    return (
      <img
        alt="..."
        src={this.state.carouselData[this.state.currentImageIndex]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
