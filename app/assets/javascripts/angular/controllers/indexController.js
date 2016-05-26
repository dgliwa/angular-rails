angular.module("app.controllers").controller("IndexController", ["$scope", function($scope) {
    $scope.newName = "";
    $scope.test = "Hello World!";
    $scope.items = [{ name: "mark" }, { name: "raz" }, { name: "joye" }, { name: "lacey"}, { name: "alejandro" }];

    $scope.addNewName = function() {
        if($scope.newName && $scope.newName != "") {
            $scope.items.push({ name: $scope.newName });
        }
        $scope.newName = "";
    }
}]);
