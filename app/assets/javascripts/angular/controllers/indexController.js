angular.module("app.controllers").controller("IndexController", ["$scope", "names", function($scope, names) {
    $scope.newName = "";
    $scope.test = "Hello World!";

    var promise = names.query().$promise.then(function(data){
        $scope.items = data;
    });

    $scope.addNewName = function() {
        if($scope.newName && $scope.newName != "") {
            $scope.items.push({ name: $scope.newName });
        }
        $scope.newName = "";
    }
}]);
