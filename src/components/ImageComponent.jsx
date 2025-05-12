import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log("PROPS ImageComponent", this.props);

    return <img src={this.props.src} alt={this.props.alt} style={this.props.style} className={this.props.className} />;
  }
}

export default ImageComponent;
