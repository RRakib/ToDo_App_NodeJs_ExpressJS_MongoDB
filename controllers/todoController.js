let bodyParser = require("body-parser")
let mongoose = require("mongoose")

let data = [
    {item: "Start Coding"},
    {item: "Sleep Some More"},
    {item: "Again Start Coding"}
]
let urlencodedParser = bodyParser.urlencoded({ extended : false})



module.exports = function(app) {
    app.get("/todo" , (req, res) => {
        res.render("todo", {
            todo : data
        })
    })
    app.post("/todo" ,urlencodedParser,  function(req, res) {
        console.log(req.body)
        data.push(req.body);
        res.json(data)
    })

    app.delete("/todo/:item" , (req, res) => {
        data = data.filter((todo) => {return todo.item.replace(/ /g, "-") !== req.params.item})
        res.json(data)
    })
}