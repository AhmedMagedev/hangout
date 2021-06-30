import firebase from "firebase/app";
import "firebase/firestore";

const ReadFromCloudFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      console.log("Data was successfully fetched from firestore");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return <button onClick={readData}>Read data from firestore</button>;
};

export default ReadFromCloudFirestore;
