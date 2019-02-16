let bodyParser = require("body-parser")
let mongoose = require("mongoose")

// Connecting To My Database(MongoDB)
mongoose.connect("mongodb://localhost:27017/todo");


// Creating Schema(Skeliton Of How The Database Will Look)
let todoSchema = new mongoose.Schema({
    item : String
});

// Creating Collection(Model) for The Schema
let Todo = mongoose.model("TodoCollection" , todoSchema);

// Passing Data To The Collection
// let item1 = Todo({
//     item: "Start Coding"
// }).save(function(err){
//     if(err){
//         throw err
//     }
//     else{
//         console.log("Item Saved")
//     }
// })


// Dummy Data
// let data = [
//     {item: "Start Coding"},
//     {item: "Sleep Some More"},
//     {item: "Again Start Coding"}
// ]


let urlencodedParser = bodyParser.urlencoded({ extended : false})


module.exports = function(app) {
    app.get("/todo" , (req, res) => {
        Todo.find({}, (err, result) => {
            if(err){
                throw err
            };
            res.render("todo", {
                todo : result
            })
        })

    })
    app.post("/todo" ,urlencodedParser,  function(req, res) {
        let newTodo = Todo(req.body).save( (err, data) => {
            if(err) throw err;
            res.json(data)
        });
        
    })

    app.delete("/todo/:item" , (req, res) => {
        Todo.find({item : req.params.item}).remove((err, data) => {
            if(err) throw err;
            res.json(data)
        })
    })
}