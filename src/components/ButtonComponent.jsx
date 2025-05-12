const ButtonComponent = function (props) {
  console.log("PROPS ButtonComponent", props);
  return (
    <button style={props.style} className={props.className}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;
