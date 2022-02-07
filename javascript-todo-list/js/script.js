// DOM
const inputTaskDOM = document.querySelector("#task");
const ulListDOM = document.querySelector("#list");
const successDOM = document.querySelector(".success");
const errorDOM = document.querySelector(".error");

// check input value
function checkValue(value) {
  return value.trim() ? true : false;
}



// add new li element in ul tag
function newElement() {
  let listContent = inputTaskDOM.value;

  if (checkValue(listContent)) {
    const liDOM = document.createElement("li");

    liDOM.innerHTML = `${listContent} <span class="close">&times;</span>`;
    ulListDOM.append(liDOM);

    saveTodos(listContent);

    showToastr(successDOM);

    inputTaskDOM.value = "";
  } else {
    showToastr(errorDOM);
  }
}



// delete element
function removeElement(e) {
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  deleteTodoLocalStorage(e.target.parentElement.firstChild.data.trim());
}



// checked Element
function checkElement(e) {
  e.target.classList.toggle("checked");
  checkedTodoLocalStorage(e.target.firstChild.data.trim());
}



//toastr
function showToastr(domELement) {
  $(domELement).toast("show");
}



// save local storage
function saveTodos(todoSet) {
  let todos = [];
  let todoObject = { content: todoSet, isDone: false };

  if (!localStorage.getItem("todos")) {
    todos.push(todoObject);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todoObject);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}



// get local storage
function showTodos() {
  if (localStorage.getItem("todos")) {
    const showTodos = JSON.parse(localStorage.getItem("todos"));

    showTodos.forEach((item) => {
      const liDOM = document.createElement("li");
      if (item.isDone) {
        liDOM.className = "checked";
      }
      liDOM.innerHTML = `${item.content} <span class="close">&times;</span>`;
      ulListDOM.append(liDOM);
    });
  }
}



// delete todo in local storage
function deleteTodoLocalStorage(content) {
  if (localStorage.getItem("todos")) {
    const showTodos = JSON.parse(localStorage.getItem("todos"));

    showTodos.forEach((item) => {
      if (item.content === content) {
        showTodos.splice(showTodos.indexOf(item), 1);
      }
    });

    localStorage.setItem("todos", JSON.stringify(showTodos));
  }
}



// checked todo in local storage
function checkedTodoLocalStorage(content) {
  if (localStorage.getItem("todos")) {
    let showTodos = JSON.parse(localStorage.getItem("todos"));

    showTodos.forEach((item, index, arr) => {
      if (item.content === content) {
        if (arr[index].isDone) {
          arr[index].isDone = false;
        } else {
          arr[index].isDone = true;
        }
      }
    });

    localStorage.setItem("todos", JSON.stringify(showTodos));
  }
}


// show todos
showTodos();


// event listeners
ulListDOM.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    checkElement(e);
  }

  if (e.target.classList.contains("close")) {
    removeElement(e);
  }
});
