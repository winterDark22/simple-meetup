import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  // props here is an object
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.discription}</p>
        </div>
        <div className={classes.actions}>
          <button>Add Favourite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
