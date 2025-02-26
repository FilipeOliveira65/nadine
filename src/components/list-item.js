export default function ListItem(props) {
    console.log(props);
    return (
      <li>
        <strong>{props.category || " "} </strong>
        {props.item || " "}
      </li>
    );
  }
  