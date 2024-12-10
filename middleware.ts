const Keycloak = require("keycloak-connect");
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const kcConfig = {
  clientId: "my-app-angular",
  bearerOnly: true,
  serverUrl: "http://localhost:8080",
  realm: "myrealm",
  realmPublicKey:
    "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkMTNiOGJhZi01NDJmLTQxNWMtYmYyOC05MGVkMDYzMTlkNDgifQ.eyJleHAiOjE3MzM4NjgzNTYsImlhdCI6MTczMzg2NjU1NiwianRpIjoiYmE1Yzg4ZTgtNWRkNy00ODFmLWE4MjYtYjYzMDUwZDc5YmQ2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwic3ViIjoiNmNhYWI4OTAtMmIyYy00NmExLWFlMTUtY2UwNjBkNmRiYjMzIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6Im15LWFwcC1hbmd1bGFyIiwic2lkIjoiMjkzNDdhY2ItNzdhNy00MTY0LWJkZjEtNmMzNmU4ZDc4OGUxIiwic2NvcGUiOiJvcGVuaWQgcm9sZXMgYmFzaWMgYWNyIHdlYi1vcmlnaW5zIGVtYWlsIHByb2ZpbGUifQ.XIiRtQpSR4LUyJtjX-Kv3ic0hC-6HnMnKqGDFTLapFdy6kGQ9Fcjcvb1PLizmriUUHbx7pQSERHMOUrm29bJxw",
};

export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);