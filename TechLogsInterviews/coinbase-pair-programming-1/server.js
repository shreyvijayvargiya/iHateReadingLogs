const express = require("express");
const app = express();
const port = 4000;

app.get("/sidebar", (req, res) => {
  res.json({
    count: 2,
    line_2: "Coinbase is the most secure crypto exchange in the world",
    line_1: "To help secure your account, we will be sending you a two factor auth code to your phone",
    line_3: "",
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
