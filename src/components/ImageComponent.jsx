import React from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, alt, style, className } = this.props;
    return <img src={src} alt={alt} style={style} className={className} />;
  }
}

export default ImageComponent;
