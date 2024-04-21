import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Button } from "react-native";

import { supabase } from "../utils/supabase";

export default function () {
  GoogleSignin.configure({
    scopes: ["profile", "email"], // ["https://www.googleapis.com/auth/drive.readonly"] what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "925865605250-25nrvo4fq7m46a2hdi9t64die92ggk2u.apps.googleusercontent.com",
    iosClientId:
      "925865605250-h1imahlr5e4ki7lr5ctfbl3bj22ojubh.apps.googleusercontent.com",
  });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(JSON.stringify(userInfo, null, 2));
          console.log(JSON.stringify(userInfo.user, null, 2));
          if (userInfo.idToken) {
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: "google",
              token: userInfo.idToken,
            });
            console.log(error, data);
          } else {
            throw new Error("no id token present");
          }
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }}
    ></GoogleSigninButton>
  );
}
