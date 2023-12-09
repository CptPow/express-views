const express = require ("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/", require("./routes/router"))
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=> {
    console.log(`Server in ascolto su porta ${PORT}`);
})
