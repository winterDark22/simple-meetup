import MeetupList from "../component/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meet",
    image:
      "https://www.travelandleisure.com/thmb/2WyEBfzLSAW7HgqiuC1-qbySpA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-rothenburg-ob-der-tauber-PLACESGER0623-a9378cf8ee2b45be96e72e662597a036.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },

  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      {/* <h1>AllMeetups page </h1> */}
      <ul>
        {/* {DUMMY_DATA.map((meeting) => {
          return <li key={meeting.id}>{meeting.title}</li>;
        })} */}

        <MeetupList list={DUMMY_DATA} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
