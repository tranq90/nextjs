import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mcgraw-hill-42nd-st_1.jpg/800px-Mcgraw-hill-42nd-st_1.jpg"
      title="first meetup"
      address="asdasd123"
      description="asdasdasd"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mcgraw-hill-42nd-st_1.jpg/800px-Mcgraw-hill-42nd-st_1.jpg",
        id: meetupId,
        title: "first meetup",
        address: "address 2, address",
        description: "this is a first meet up",
      },
    },
  };
}

export default MeetupDetails;
