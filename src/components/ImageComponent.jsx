const ImageComponent = function (props) {
  console.log("PROPS ImageComponent", props);
  return <img src={props.src} alt={props.alt} style={props.style} className={props.className} />;
};

export default ImageComponent;
