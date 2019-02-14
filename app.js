let express = require("express")
let todoController = require("./controllers/todoController");
app = express();

app.set("view engine" , "ejs");
app.use(express.static("./Public"))



todoController(app);


app.listen(8001)