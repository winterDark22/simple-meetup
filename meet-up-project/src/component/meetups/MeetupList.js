import MeetupItem from "./MeetupItem";

import classes from "./MeetupList.module.css";
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.list.map((meet) => {
        return (
          <MeetupItem
            key={meet.id}
            id={meet.id}
            image={meet.image}
            title={meet.title}
            address={meet.address}
            description={meet.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
