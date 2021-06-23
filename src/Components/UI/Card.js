import "../../App.css";

function Card(props) {
  //const StyleClass = "card " + props.className;

  return <div className={`${"card"} ${props.className}`}>{props.children}</div>;
}

export default Card;
