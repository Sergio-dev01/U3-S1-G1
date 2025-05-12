import { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt, style, className } = this.props;

    return <img src={src} alt={alt} style={style} className={className} />;
  }
}

export default ImageComponent;
