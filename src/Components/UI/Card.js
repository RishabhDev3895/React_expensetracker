import "../../App.css";

function Card(props) {
  const StyleClass = "card " + props.className;

  return <div className={StyleClass}>{props.children}</div>;
}

export default Card;
