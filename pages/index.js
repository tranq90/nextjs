import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mcgraw-hill-42nd-st_1.jpg/800px-Mcgraw-hill-42nd-st_1.jpg",
    address: "1234 address, address",
    description: "first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mcgraw-hill-42nd-st_1.jpg/800px-Mcgraw-hill-42nd-st_1.jpg",
    address: "1234 address, address",
    description: "second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
}

export default HomePage;
