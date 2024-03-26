let express = require("express");
let { PORT, MONGODB_ATLAS } = require("./config");
let { DbConnection } = require("./config/db");
let schoolRoute = require("./routes/schoolRoute");
let chapterRoute = require("./routes/chapterRoute");

let app = express();

DbConnection();

app.use(express.json());
app.use("/", schoolRoute);
app.use("/chapter", chapterRoute);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is running at http://localhost:${PORT}`);
});
