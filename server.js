 var express = require('express');
 var app = express();
 var PORT = process.env.PORT || 8000;
 var todos = [{
 	id: 1,
 	description: 'Maak app af om routes te leren',
 	completed: false
 }, {
 	id: 2,
 	description: 'deploy on Heroku',
 	completed: false
 },{
 	id: 3,
 	description: 'Database koppelen',
 	completed: false
 }];

 app.get('/', function (req, res) {
 	res.send('Root van Todo API');
 });

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos /:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo){
		if (todoId === todo.id) {
			matchedTodo = todo;
		} 
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
})

 app.listen(PORT, function () {
 	console.log('Express listening on port ' + PORT + '!');
 });