/**
 * Created by sauloguedes on 3/31/16.
 */
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul class="list-group">';
    for (var i = 0; i < todos.length; i++) {
            html += '<li class="list-group-item">' + todos[i] + ' <i class="fa fa-cog fa-fw"></i><button class="btn btn-default btn-xs " id="' + i + '" aria-label="Left Align"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></li>';
    }
    ;
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('btn btn-default btn-xs');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
    ;
}


document.getElementById('taskform').addEventListener('submit', add);
show();