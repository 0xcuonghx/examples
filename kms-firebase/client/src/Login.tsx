// src/Login.js
import React from "react";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const { data } = await axios.post("http://localhost:3001/auth/google", {
        code: codeResponse.code,
      });

      const { user } = await signInWithCredential(
        auth,
        GoogleAuthProvider.credential(data.id_token, data.access_token)
      );
      console.log("firebaseUser", user);

      const { data: publicKeyData } = await axios.get(
        "http://localhost:3001/kms/public-key"
      );

      console.log(publicKeyData);
    },
    flow: "auth-code",
  });
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("####");
        const oauthCredential = GoogleAuthProvider.credentialFromResult(result);
        console.log(oauthCredential);

        // console.log(result);
        // const _tokenResponse = (result as any)._tokenResponse;
        // oAuth2Client.setCredentials({
        //   access_token: _tokenResponse.oauthAccessToken,
        //   refresh_token: _tokenResponse.refreshToken,
        //   scope: "https://www.googleapis.com/auth/cloudkms",
        //   token_type: "Bearer",
        // });
        // const client = new KeyManagementServiceClient({
        //   auth: oAuth2Client as any,
        // });
        // const versionName = client.cryptoKeyVersionPath(
        //   "lunascape-joc-issuer-dev",
        //   "asia-northeast2",
        //   "test",
        //   // "test-key-name-2", // no-role
        //   "test-key-name", // role
        //   "1"
        // );
        // const request = {
        //   name: versionName,
        // };
        // client.getPublicKey(request).then((a) => console.log(a));
      })
      .catch((error) => {
        console.error(error);
        // Handle errors here
      });
  };

  return (
    <div>
      {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
};

export default Login;
