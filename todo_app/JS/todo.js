/*this function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are inputed*/
    var todos= new Array;
    /*This pulls the taks that was saved in the web browser memory*/
    var todos_str= localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will communucate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null ) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a variable of it*/
    var taks= document.getElementById('task').Value;

    var todos= get_todos();
    /*This adds a new task and creates a variable of it*/
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").Value="";
    Show();

    return false;
}

/*This function keeps the tasks permanetly displayed on the screen*/
function show() {
    /*This sets the tasks that was retrieved as a variable*/
    var todos_str= get_todos();

    /*This sets up each task as an unordered lists*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed*/
for (var i = 0; i< todos.length; i++) {
    /*This also displays the task as a list and creates the button with the "X" */
    html += '</li>' + todos [i] + '<button class="remove" id="' + i + '">x</button></li>';
    
    };
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML= html;
}
/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*This will keep the inputs displayed permanentaly on the screen */
show();

/*This creates the functionality of removing a todo item form the array*/
function remove() {
    var id= this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*This looks in the show() how to display a removed item on the screen */
    show();

    return false;
}

/*This tells the browser how to display the todo array after an item has been removed */
var buttons = document.getElementsByClassName('remove');
for (var i=0; i< buttons.length; i++) {
    buttons [i].addEventListener('click', remove);
};