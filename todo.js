angular.module('todoApp', [])
.controller('ToDoController', function(){
	var todoList = this;

	todoList.todos=[
	{text:'learn Angular', done:false}
	]

	todoList.addTodo = function(){
		todoList.todos.push({text: todoList.newTodo, done:false});
		todoList.newTodo = '';
	}

	todoList.remaining = function(){
		var count = 0;
		angular.forEach(todoList.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	}

});