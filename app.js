const express = require("express");
const PORT = 5151;
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Defult" });
});

app.use("/login", require("./Modules/login"));

app.use("/module1", require("./Modules/module1"));

app.listen(PORT, () => {
  console.log(`Server Connected  localhost:${PORT}`);
});
