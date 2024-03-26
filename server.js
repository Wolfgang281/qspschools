let express = require("express");
let { PORT, MONGODB_ATLAS } = require("./config");
let { DbConnection } = require("./config/db");
let contentRoute = require("./routes/contentRoute");
let chapterRoute = require("./routes/chapterRoute");
let courseRoute = require("./routes/courseRoute");
const cors = require("cors");

let app = express();

DbConnection();

app.use(express.json());
app.use(cors());
app.use("/content", contentRoute);
app.use("/chapter", chapterRoute);
app.use("/course", courseRoute);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is running at http://localhost:${PORT}`);
});
