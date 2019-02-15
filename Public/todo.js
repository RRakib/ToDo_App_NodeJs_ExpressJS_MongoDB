$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });



//     document.addEventListener("loadeddata" , function() {
//     document.querySelector("#formSubmit").addEventListener("submit",function() {
//         let xhr = new XMLHttpRequest();
//         let inputTodo = document.querySelector("#inputTodo").value;
//         let data = {item : inputTodo};
//         xhr.open("POST" , "/todo" ,  true);
//         xhr.send(data);
//         window.location.href("/todo");
//     })
// })