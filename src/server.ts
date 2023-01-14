import app from "./app";

const port = 5009;

app.listen(port, () => {
  console.log("SERVER RUNNING IN THE PORT", port);
});
