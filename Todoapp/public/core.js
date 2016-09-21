var scotchTodo = angular.module('scotchTodo', []);

scotchTodo.controller('mainController',function($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
      $scope.findTodo = function() {
            $http.get('/api/todos')
                .success(function(data) {
                    $scope.todos = data;
                    $scope.findtodos=$scope.todos;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
      };
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos',$scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


})