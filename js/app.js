var app = angular.module("kanbanapp", ['ngDraggable']);

app.controller('maincontroller', function ($scope) {

	$scope.bugs = ['bug', 'requirement', 'issue', 'feature'];
	$scope.stages =
		[
			{
				"id": 1,
				"name": "Concept",
			},
			{
				"id": 2,
				"name": "Pending",
			},
			{
				"id": 3,
				"name": "Develop",
			},
			{
				"id": 4,
				"name": "Approved",
			},
			{
				"id": 5,
				"name": "Rejected",
			}
		];
	$scope.defaultTasks =
		[
			{
				"title": "Task Title 1",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "bug",
				"stage_id": 1
			},
			{
				"title": "Task Title 2",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 1
			},
			{
				"title": "Task Title 3",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "issue",
				"stage_id": 3
			},
			{
				"title": "Task Title 4",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "feature",
				"stage_id": 4
			},
			{
				"title": "Task Title 5",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 5
			},
			{
				"title": "Task Title 1",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "bug",
				"stage_id": 1
			},
			{
				"title": "Task Title 2",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 1
			},
			{
				"title": "Task Title 3",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "issue",
				"stage_id": 3
			},
			{
				"title": "Task Title 4",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "feature",
				"stage_id": 4
			},
			{
				"title": "Task Title 5",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 5
			},
			{
				"title": "Task Title 1",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "bug",
				"stage_id": 1
			},
			{
				"title": "Task Title 2",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 1
			},
			{
				"title": "Task Title 3",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "issue",
				"stage_id": 3
			},
			{
				"title": "Task Title 4",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "feature",
				"stage_id": 4
			},
			{
				"title": "Task Title 5",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 5
			},
			{
				"title": "Task Title 1",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "bug",
				"stage_id": 1
			},
			{
				"title": "Task Title 2",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 1
			},
			{
				"title": "Task Title 3",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "issue",
				"stage_id": 3
			},
			{
				"title": "Task Title 4",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "feature",
				"stage_id": 4
			},
			{
				"title": "Task Title 5",
				"description": "This is cards description. This is cards description. This is cards description. This is cards description. This is cards description.",
				"status": "concept",
				"type": "requirement",
				"stage_id": 5
			}

		];
	$scope.newTask = {};

	$scope.isLoading = true;
	if (localStorage.getItem('tasks') !== null) {
		$scope.tasks = JSON.parse(localStorage.getItem('tasks'));
		$scope.isLoading = false;
	} else {
		$scope.tasks = $scope.defaultTasks;
		$scope.isLoading = false;
	}

	// function for drag start
	$scope.dragStart = function dragStart(event, task) {
		task.dragging = true;
	}

	// function for on dropping
	$scope.onDrop = function (data, event, stage) {
		if (data && data.stage_id != stage.id) {
			data.showMore = false;
			data.stage_id = stage.id;
			data.dragging = false;
			if (localStorage.getItem('tasks')) {
				localStorage.removeItem('tasks');
			}
			localStorage.setItem('tasks', JSON.stringify($scope.tasks));
		}
	}
	// function for creating new task
	$scope.pushTask = function () {
		$scope.newTask.status = "concept";
		$scope.newTask.$$hashKey = "object:" + (Math.floor(Math.random() * 100) + 1);
		$scope.tasks.push($scope.newTask);
		if (localStorage.getItem('tasks')) {
			localStorage.removeItem('tasks');
		}
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
		$scope.newTask = {};
	}

	// show more
	$scope.showMore = function (task) {

		if (task.showMore == true) {
			task.showMore = false;
		}
		else {
			task.showMore = true;
		}
	}


	// delete task
	$scope.deleteTask = function (task) {
		var idx = $scope.tasks.indexOf(task);
		$scope.tasks.splice(idx, 1);
		if (localStorage.getItem('tasks')) {
			localStorage.removeItem('tasks');
		}
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	}

	$scope.changeStatus = function(task){
		task.showMore = false;
		if (localStorage.getItem('tasks')) {
			localStorage.removeItem('tasks');
		}
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	}
});