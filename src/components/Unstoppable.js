import React, { useState } from "react";
import UAuth from "@uauth/js";
import { Button } from "react-bootstrap";
const unstoppableAuth = new UAuth({
  clientID: "71643f65-b6c6-4d89-8589-ed9684011a98",
  redirectUri: "http://localhost:3000",
});
function UnstoppableDomainLogin() {
  const [Uauth, setUauth] = useState();
  async function connect() {
    try {
      const authorization = await unstoppableAuth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);
      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }
  function log() {
    if (Uauth === null || Uauth === undefined) {
      connect();
    }
  }
  return (
    <>
      <Button onClick={log}>
        {Uauth != null ? Uauth["sub"] : "Login with UNSD"}
      </Button>
    </>
  );
}
export default UnstoppableDomainLogin;
