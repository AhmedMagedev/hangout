import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({
          string_data: "Benjamin Carlson",
          number_data: 2,
          boolean_data: true,
          map_data: { stringInMap: "Hi", numberInMap: 7 },
          array_data: ["text", 4],
          null_data: null,
          time_stamp: firebase.firestore.Timestamp.fromDate(
            new Date("December 17, 1995 03:24:00")
          ),
          geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435),
        })
        .then(alert("Data was successfully sent to cloud firestore!"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return <button onClick={sendData}>Send To Firestore</button>;
};

export default WriteToCloudFirestore;
