let bodyParser = require("body-parser")

data = [
    {item: "Start Coding"},
    {item: "Sleep Some More"},
    {item: "Again Start Coding"}
]
let urlencodedParser = bodyParser.urlencoded({ extended : false})



module.exports = (app) => {
    app.get("/todo" , (req, res) => {
        res.render("todo", {
            todo : data
        })
    })
    app.post("/todo" ,urlencodedParser,  (req, res) => {
        data.push(req.body);
        res.json(data);
    })

    app.delete("/todo" , (rea, res) => {

    })
}