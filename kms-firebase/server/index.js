const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
const keys = require("./oauth2.keys.json");
const { KeyManagementServiceClient } = require("@google-cloud/kms");

const app = express();

app.use(cors());
app.use(express.json());

const oAuth2Client = new OAuth2Client(
  keys.web.client_id,
  keys.web.client_secret,
  "postmessage"
);

app.post("/auth/google", async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  oAuth2Client.setCredentials(tokens);

  res.json(tokens);
});

app.post("/auth/google/refresh-token", async (req, res) => {
  const user = new UserRefreshClient(
    clientId,
    clientSecret,
    req.body.refreshToken
  );
  const { credentials } = await user.refreshAccessToken(); // optain new tokens
  res.json(credentials);
});

app.get("/kms/public-key", async (req, res) => {
  const client = new KeyManagementServiceClient({ authClient: oAuth2Client });

  const versionName = client.cryptoKeyVersionPath(
    "lunascape-joc-issuer-dev",
    "asia-northeast2",
    "test",
    // "test-key-name-2", // no-role
    "test-key-name", // role
    "1"
  );

  const request = {
    name: versionName,
  };
  const [publicKeyHex] = await client.getPublicKey(request);

  res.json(publicKeyHex);
});

app.listen(3001, () => console.log(`server is running`));
