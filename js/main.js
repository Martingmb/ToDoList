var listID = 0;

var listItem = () => {
    var li = document.createElement('li');
    li.setAttribute("id", listID);
    var input = document.getElementById('input').value;
    li.appendChild(document.createTextNode(input));

    if (input !== '') {
        document.getElementById('uList').appendChild(li);
        document.getElementById('input').value = '';
        listID++;
    }
}


var deleteList = () => {
    var i = 0;
    if (i < listID) {
        for (i; i < listID; i++) {
            document.getElementById(i).remove();
        }
        listID = 0;
    }
}

var markList = () => {
    var i = 0;
    if (i < listID) {
        for (i; i < listID; i++) {

            if (document.getElementById(i).classList.toggle('checked')) {

            } else {
                document.getElementById(i).classList.toggle('checked');
            }
        }
    }
}

var clearTodo = () => {
    var i = 0;
    if (i < listID) {
        for (i; i < listID; i++) {
            document.getElementById(i).classList.remove('checked');
        }
    }
}
document.getElementById('clearTodo').addEventListener('click', clearTodo)
document.getElementById('markTodo').addEventListener('click', markList)
document.getElementById('deleteTodo').addEventListener('click', deleteList)
document.getElementById('postButton').addEventListener('click', listItem)

var list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);