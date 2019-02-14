window.addEventListener("load" , () => {
    let formSubmit = document.querySelector("#formSubmit");
    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputTodo = document.querySelector("#inputTodo").value;
        let data = {item : inputTodo};
        let xhr = new XMLHttpRequest();
        xhr.open("POST" , "/todo" , true);
        xhr.onload = (data) => {
            if(xhr.status === 200){
                location.reload();
            }
        }
        xhr.send();
    })

})