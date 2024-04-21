import { Button } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export default function () {
  return (
    <Button
      title="SignOut"
      onPress={async () => {
        try {
          await GoogleSignin.signOut();
          console.log("Succesfully signed out"); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      }}
    ></Button>
  );
}
